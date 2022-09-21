import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import AuthLayout from '@/layouts/AuthLayout';
import Select from '@/components/shared/Select';
import Button from '@/components/shared/Button';
import AuthInput from '@/components/shared/AuthInput';
import { days, getCurrentYear, months, years } from '@/constants/date';
import { ADD_INFORMATION_SCHEMA, InformationSchema } from '@/constants/schema';

import { useCityQuery } from '@/hooks/useCityQuery';
import { useDistrictQuery } from '@/hooks/useDistrictQuery';

const InformationPage: NextPage = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    control,
    formState: { isValid, isDirty, errors },
  } = useForm<InformationSchema>({
    mode: 'onChange',
    resolver: yupResolver(ADD_INFORMATION_SCHEMA),
    defaultValues: {
      year: 2022,
      month: 1,
    },
  });

  const selectedYear = useWatch({ control, name: 'year' });
  const selectedMonth = useWatch({ control, name: 'month' });
  const selectedCity = useWatch({ control, name: 'city' });

  const { data: cityData } = useCityQuery();

  const { data: districtData } = useDistrictQuery(selectedCity);

  const onSubmit = (data: InformationSchema) => {
    if (!cityData || !districtData) return;
    const cityName = cityData.regionMapData.get(data.city);
    const districtName = districtData.regionMapData.get(data.district);
    console.log({ ...data, cityName, districtName });
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

  return (
    <AuthLayout
      title="추가 정보 입력"
      description="추가적인 정보를 입력해주세요."
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          id="name"
          type="text"
          label="이름"
          errorMessage={errors.name?.message}
          {...register('name')}
        />
        <Select
          id="gender"
          defaultLabel="성별을 선택하세요."
          options={genderOptions}
          onChangeOption={onChangeOption('gender')}
          label="성별"
        />
        <Flex>
          <Select
            id="year"
            defaultLabel="연도 입력"
            options={allYears}
            onChangeOption={onChangeOption('year')}
            label="생년월일"
          />
          <Select
            id="month"
            defaultLabel="월 입력"
            options={months}
            onChangeOption={onChangeOption('month')}
          />
          <Select
            id="day"
            defaultLabel="날짜 입력"
            options={allDays}
            onChangeOption={onChangeOption('day')}
          />
        </Flex>
        <Flex>
          <Select
            id="city"
            defaultLabel="도시를 선택해주세요"
            options={cityData?.regionData}
            onChangeOption={onChangeOption('city')}
            label="지역"
          />
          <Select
            id="district"
            defaultLabel="구를 선택해주세요"
            options={districtData?.regionData}
            disabled={!selectedCity}
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
          disabled={!isValid || !isDirty}
          aria-disabled={!isValid || !isDirty}
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
