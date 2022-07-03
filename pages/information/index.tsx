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
  // 맨처음에 Ref로 관리하려했다가 re-render가 없어서 day가 바뀌지 않는 이슈로 state로 year, month 관리
  // state로 관리하던 year, month를 watch로 인해 더 쉽게 관리. (state처럼 작동)
  // useForm hook 안에서 defaultvalue

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
        <p>성별</p>
        <Select
          id="gender"
          defaultLabel="성별을 선택하세요."
          options={[
            { value: 'male', label: '남' },
            { value: 'female', label: '여' },
          ]}
          {...register('gender')}
        />

        <p>생년월일</p>
        <Flex>
          <Select
            id="year"
            defaultLabel="날짜를 입력해주세요."
            options={years(getCurrentYear())}
            {...register('year')}
          ></Select>

          <Select
            id="month"
            defaultLabel="월 입력"
            options={months}
            {...register('month')}
          />

          <Select
            id="day"
            defaultLabel="날짜 입력"
            options={days(watchYear, watchMonth)}
            {...register('day')}
          />
        </Flex>

        <p>지역</p>
        <Flex>
          <Select
            id="city"
            defaultLabel="도시를 선택해주세요"
            options={city}
            {...register('city')}
          />
          <Select
            id="district"
            defaultLabel="구를 선택해주세요"
            options={district}
            {...register('district')}
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
