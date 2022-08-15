import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthLayout from '@/layouts/AuthLayout';
import AuthInput from '@/components/shared/AuthInput';
import { ADD_INFORMATION_SCHEMA, InformationSchema } from '@/constants/schema';
import styled from 'styled-components';
import { days, getCurrentYear, months, years } from '@/constants/date';
import React from 'react';
import Select from '@/components/shared/Select/Select';
import useRegionFetch from '@/hooks/useRegionFetch';

const InformationPage: NextPage = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { isValid, isDirty, errors },
  } = useForm<InformationSchema>({
    mode: 'onChange',
    resolver: yupResolver(ADD_INFORMATION_SCHEMA),
    defaultValues: {
      year: 2022,
      month: 1,
    },
  });

  const watchYear: number = watch('year', 2022);
  const watchMonth: number = watch('month', 1);
  const watchRegionCode = watch('city');

  const [city, cityMap] = useRegionFetch({
    url: 'https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000',
  });

  const [district, districtMap] = useRegionFetch({
    url: `https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=${watchRegionCode?.substring(
      0,
      2,
    )}*000000&is_ignore_zero=true`,
    deps: watchRegionCode,
  });

  const onSubmit = React.useCallback(
    (data: InformationSchema) => {
      const cityName = cityMap.get(data.city);
      const districtName = districtMap.get(data.district);
      console.log({ ...data, cityName, districtName });
    },
    [cityMap, districtMap],
  );

  return (
    <AuthLayout title="로그인">
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
          options={[
            { value: 'male', label: '남' },
            { value: 'female', label: '여' },
          ]}
          setValue={setValue}
          label="성별"
        />

        <Flex>
          <Select
            id="year"
            defaultLabel="연도 입력"
            options={years(getCurrentYear())}
            setValue={setValue}
            label="생년월일"
          ></Select>

          <Select
            id="month"
            defaultLabel="월 입력"
            options={months}
            setValue={setValue}
          />

          <Select
            id="day"
            defaultLabel="날짜 입력"
            options={days(watchYear, watchMonth)}
            setValue={setValue}
          />
        </Flex>

        <Flex>
          <Select
            id="city"
            defaultLabel="도시를 선택해주세요"
            options={city}
            setValue={setValue}
            label="지역"
          />
          <Select
            id="district"
            defaultLabel="구를 선택해주세요"
            options={district}
            setValue={setValue}
          />
        </Flex>
        <button
          type="submit"
          disabled={!isValid || !isDirty}
          aria-disabled={!isValid || !isDirty}
        >
          등록
        </button>
      </form>
    </AuthLayout>
  );
};

export default InformationPage;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
