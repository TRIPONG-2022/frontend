import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm, useWatch, FieldErrors } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import AuthLayout from '@/layouts/AuthLayout';
import Select from '@/components/shared/Select';
import Button from '@/components/shared/Button';
import AuthInput from '@/components/shared/AuthInput';
import { days, getCurrentYear, months, years } from 'utils/date';
import { ADD_INFORMATION_SCHEMA, InformationSchema } from '@/constants/schema';

import { useCityQuery } from '@/hooks/useCityQuery';
import { useDistrictQuery } from '@/hooks/useDistrictQuery';
import { createErrorMessage } from 'utils/validate';

const InformationPage: NextPage = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    control,
    formState: { isValid, isDirty, errors },
  } = useForm<InformationSchema>({
    mode: 'onSubmit',
    resolver: yupResolver(ADD_INFORMATION_SCHEMA),
  });
  const [formErrorMessage, setFormErrorMessage] = useState<string | undefined>(
    '',
  );

  const selectedGender = useWatch({ control, name: 'gender' });
  const selectedYear = useWatch({ control, name: 'year' });
  const selectedMonth = useWatch({ control, name: 'month' });
  const selectedDay = useWatch({ control, name: 'day' });
  const selectedCity = useWatch({ control, name: 'city' });
  const selectedDistrict = useWatch({ control, name: 'district' });

  const { data: cityData } = useCityQuery();

  const { data: districtData } = useDistrictQuery(selectedCity);

  const onSubmit = (data: InformationSchema) => {
    setFormErrorMessage('');
    if (!cityData || !districtData) return;
    const cityName = cityData.regionMapData.get(data.city);
    const districtName = districtData.regionMapData.get(data.district);
    console.log({ ...data, cityName, districtName });
  };

  const onError = (errors: FieldErrors<InformationSchema>) => {
    const fieldErrorMessage = [
      {
        keys: ['gender'],
        label: '성별',
      },
      {
        keys: ['year', 'month', 'day'],
        label: '생년월일',
      },
      {
        keys: ['city', 'district'],
        label: '지역',
      },
    ];
    setFormErrorMessage(
      createErrorMessage(
        errors,
        fieldErrorMessage,
        'required',
        '은 필수 입력 정보입니다.',
      ),
    );
  };

  const onChangeOption =
    (id: 'name' | 'gender' | 'year' | 'month' | 'day' | 'city' | 'district') =>
    (value: string | number) => {
      setValue(id, value);
    };

  const allYears = React.useMemo(() => years(getCurrentYear()), []);

  const allDays = React.useMemo(
    () => days(selectedYear, selectedMonth),
    [selectedYear, selectedMonth],
  );

  const genderOptions = React.useMemo(
    () => [
      { value: 'male', label: '남' },
      { value: 'female', label: '여' },
    ],
    [],
  );

  useEffect(() => {
    setValue('district', '');
  }, [selectedCity, setValue]);

  return (
    <AuthLayout
      title="추가 정보 입력"
      description="추가적인 정보를 입력해주세요."
      errorMessage={formErrorMessage}
    >
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <AuthInput
          id="name"
          label="이름"
          type="text"
          errorMessage={errors.name?.message}
          {...register('name')}
        />
        <Select
          id="gender"
          label="성별"
          defaultLabel="성별을 선택하세요."
          options={genderOptions}
          selectedValue={selectedGender}
          onChangeOption={onChangeOption('gender')}
        />
        <Flex>
          <Select
            id="year"
            label="생년월일"
            defaultLabel="연도 입력"
            options={allYears}
            selectedValue={selectedYear}
            onChangeOption={onChangeOption('year')}
          />
          <Select
            id="month"
            defaultLabel="월 입력"
            options={months}
            selectedValue={selectedMonth}
            onChangeOption={onChangeOption('month')}
          />
          <Select
            id="day"
            defaultLabel="날짜 입력"
            options={allDays}
            selectedValue={selectedDay}
            onChangeOption={onChangeOption('day')}
          />
        </Flex>
        <Flex>
          <Select
            id="city"
            label="지역"
            defaultLabel="도시를 선택해주세요"
            options={cityData?.regionData}
            selectedValue={selectedCity}
            onChangeOption={onChangeOption('city')}
          />
          <Select
            id="district"
            defaultLabel="구를 선택해주세요"
            options={districtData?.regionData}
            disabled={!selectedCity}
            selectedValue={selectedDistrict}
            onChangeOption={onChangeOption('district')}
          />
        </Flex>
        <Button
          size="lg"
          type="submit"
          css={`
            width: 100%;
            margin-top: 1rem;
          `}
        >
          확인
        </Button>
      </form>
    </AuthLayout>
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export default InformationPage;
