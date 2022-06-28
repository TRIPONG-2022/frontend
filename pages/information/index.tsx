import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthLayout from '@/layouts/AuthLayout';
import AuthInput from '@/components/shared/AuthInput';
import {
  LOGIN_SCHEMA,
  ADD_INFORMATION_SCHEMA,
  InformationScheme,
} from '@/constants/schema';
import styled from 'styled-components';
import { days, months, years } from '@/constants/date';
import React, { useRef, useState, useEffect, Children } from 'react';
import Select from '@/components/shared/Select/Select';
import useRegionFetch from '@/hooks/useRegionFetch';

interface RegionInterface {
  code: string;
  name: string;
}

const InformationPage: NextPage = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { isValid, isDirty, errors },
  } = useForm<InformationScheme>({
    mode: 'onChange',
    resolver: yupResolver(ADD_INFORMATION_SCHEMA),
  });

  const onSubmit = (data: InformationScheme) => {
    console.log(data);
  };

  const watchYear = watch('year', 2022);
  const watchMonth = watch('month', 1);
  // 맨처음에 Ref로 관리하려했다가 re-render가 없어서 day가 바뀌지 않는 이슈로 state로 year, month 관리
  // state로 관리하던 year, month를 watch로 인해 더 쉽게 관리. (state처럼 작동)
  // useForm hook 안에서 defaultvalue

  const [regionCode, setRegionCode] = useState<string | undefined>('');

  const { response: city } = useRegionFetch(
    'https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000',
  );

  const { response: district } = useRegionFetch(
    `https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=${regionCode?.substring(
      0,
      2,
    )}*000000&is_ignore_zero=true`,
    regionCode,
  );

  const getAddressKeyCode = (e: any) => {
    const idx = e.target.selectedIndex;
    const option = e.target.querySelectorAll('option')[idx];
    const code = option.getAttribute('data-code');
    setRegionCode(code);
  };

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
        <select {...register('gender')}>
          <option value="male">남</option>
          <option value="female">여</option>
        </select>

        <p>생년월일</p>
        <Flex>
          <Select id="year" {...register('year')}>
            {years.map((year) => {
              return (
                <option key={`key=${year}`} value={year}>
                  {year}
                </option>
              );
            })}
          </Select>

          <Select id="month" {...register('month')}>
            {months.map((month) => {
              return (
                <option key={`key=${month}`} value={month}>
                  {month}
                </option>
              );
            })}
          </Select>

          <Select id="day" {...register('day')}>
            {days(watchYear, watchMonth)?.map((day) => {
              return (
                <option key={`key=${day}`} value={day}>
                  {day}
                </option>
              );
            })}
          </Select>
        </Flex>

        <p>지역</p>
        <Flex>
          <Select
            id="firstAddress"
            change={getAddressKeyCode}
            {...register('firstAddress')}
          >
            {city.map((item: RegionInterface) => {
              return (
                <option
                  key={`key=${item.name}`}
                  value={item.name}
                  data-code={item.code}
                >
                  {item.name}
                </option>
              );
            })}
          </Select>

          <Select id="secondAddress" {...register('secondAddress')}>
            {district?.map((item: RegionInterface) => {
              return (
                <option key={`key=${item.name}`} value={item.name}>
                  {item.name.split(' ')[1]}
                </option>
              );
            })}
          </Select>
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
