import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import {
  useForm,
  useWatch,
  FieldErrors,
  useFormContext,
  FormProvider,
} from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import AuthLayout from '@/layouts/AuthLayout';
import Select from '@/components/shared/Select';
import Button from '@/components/shared/Button';
import AuthInput from '@/components/shared/AuthInput';
import {
  getOptionDays,
  getCurrentYear,
  getOptionMonths,
  getOptionYears,
} from '@/utils/date';
import { ADD_INFORMATION_SCHEMA, InformationSchema } from '@/constants/schema';
import { useCityQuery } from '@/hooks/useCityQuery';
import { useDistrictQuery } from '@/hooks/useDistrictQuery';
import { createErrorMessage } from '@/utils/validate';
import { requestAdditionalInfo } from '@/api/auth';
import { AdditionalInfo } from '@/types/auth';
import { useRouter } from 'next/router';

const InformationPage: NextPage = () => {
  const methods = useForm<InformationSchema>({
    mode: 'onSubmit',
    resolver: yupResolver(ADD_INFORMATION_SCHEMA),
  });

  const router = useRouter();

  const {
    handleSubmit,
    register,
    setValue,
    control,
    formState: { isValid, isDirty, errors },
  } = methods;

  const [formErrorMessage, setFormErrorMessage] = useState<string | undefined>(
    '',
  );

  const selectedGender = useWatch({ control, name: 'gender' });

  const selectedCity = useWatch({ control, name: 'city' });

  const { data: cityData } = useCityQuery();

  const { data: districtData } = useDistrictQuery(selectedCity);

  const { mutate } = useMutation(
    (infoData: AdditionalInfo) => requestAdditionalInfo(infoData),
    {
      onError: () =>
        setFormErrorMessage(
          '추가 정보 등록이 실패하였습니다,  다시 시도해주세요',
        ),
      onSuccess: () => router.push('/'),
    },
  );

  function leftPad(value: number) {
    if (value >= 10) {
      return value;
    }

    return `0${value}`;
  }

  const onSubmit = (data: InformationSchema) => {
    setFormErrorMessage('');
    if (!cityData || !districtData) return;
    const cityName = cityData.regionMapData.get(data.city);
    const districtName = districtData.regionMapData.get(data.district);

    const birthDateFormat = [
      data.year,
      leftPad(data.month),
      leftPad(data.day),
    ].join('-');

    mutate({
      ...data,
      birthDate: birthDateFormat,
    });
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

  const onChangeOption = (id: 'gender') => (value: string) => {
    setValue(id, value);
  };

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
      <FormProvider {...methods}>
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

          <BirthDaySelect />

          <RegionSelect />

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
      </FormProvider>
    </AuthLayout>
  );
};

const BirthDaySelect = () => {
  const { control, setValue } = useFormContext<InformationSchema>();

  const selectedYear = useWatch({ control, name: 'year' });
  const selectedMonth = useWatch({ control, name: 'month' });
  const selectedDay = useWatch({ control, name: 'day' });

  const allYears = React.useMemo(
    () => getOptionYears(getCurrentYear(), 100),
    [],
  );

  const allDays = React.useMemo(
    () => getOptionDays(selectedYear, selectedMonth),
    [selectedYear, selectedMonth],
  );

  const onChangeOption = (id: 'year' | 'month' | 'day') => (value: number) => {
    setValue(id, value);
  };

  return (
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
        options={getOptionMonths}
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
  );
};

const RegionSelect = () => {
  const { control, setValue } = useFormContext<InformationSchema>();

  const selectedCity = useWatch({ control, name: 'city' });
  const selectedDistrict = useWatch({ control, name: 'district' });

  const { data: cityData } = useCityQuery();

  const { data: districtData } = useDistrictQuery(selectedCity);

  const onChangeOption = (id: 'city' | 'district') => (value: string) => {
    setValue(id, value);
  };

  return (
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
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export default InformationPage;
