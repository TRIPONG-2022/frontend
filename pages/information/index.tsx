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
import { useRef, useState, useEffect } from 'react';
import useCity from '@/hooks/useCity';
import useDistrict from '@/hooks/useDistrict';

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

  const [yearSelect, setYearSelect] = useState<number>(2022);
  const [monthSelect, setMonthSelect] = useState<number>(1);
  // 맨처음에 Ref로 관리하려했다가 re-render가 없어서 day가 바뀌지 않는 이슈
  // watch로 쓰셨다.
  // useForm hook 안에서 defaultvalue
  // 가상돔이라 일수 바뀌지 않았다.

  const { city } = useCity();
  const [region, setRegion] = useState<string | undefined>('');
  const { district } = useDistrict(region);
  console.log(district);

  // 날짜 select 도 authinput 처럼 분리
  // register props 성진님 방식??  공식문서 한번 더 참고

  // 리뷰 요청 드립니다! (value에 code가 들어가면 react-hook-form )
  const getAttr = (e: any) => {
    const idx = e.target.selectedIndex;
    const option = e.target.querySelectorAll('option')[idx];
    const code = option.getAttribute('data-code');
    setRegion(code);
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
          <select
            {...register('year')}
            onChange={(e) => setYearSelect(Number(e.target.value))}
          >
            {years.map((year) => {
              return (
                <option key={`key=${year}`} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
          {/* select react hook form 이게 맞나? */}
          <select
            {...register('month')}
            onChange={(e) => setMonthSelect(Number(e.target.value))}
          >
            {months.map((month) => {
              return (
                <option key={`key=${month}`} value={month}>
                  {month}
                </option>
              );
            })}
          </select>

          <select {...register('day')}>
            {days(yearSelect, monthSelect)?.map((day) => {
              return (
                <option key={`key=${day}`} value={day}>
                  {day}
                </option>
              );
            })}
          </select>
        </Flex>

        <p>지역</p>
        {/* 
          지금 코드가 거의 개판이다, 변수명, 타입이며 리팩토링 필수이다  또한 전라남도 앞에 붙는거는 잘라주면 될 거 같다.
          그리고 의존성(사이드 이펙트)이 장난아니라 지금 고쳐주어야하며, 값이 없을 때 다른 option default로 조건부 렌더링을
          걸어주던가 해야한다
          또한 동적인 URL 로 API 요청 없는 요청이 될 수도 있을 때 어떻게 예외처리하시나??
          피드백 진짜 적극 환영!
          하나하나 맘에 안드는거 다 찝어주셔도 됩니다!
          추가정보라.. required가 맞을까란 생각?
        */}

        <Flex>
          <select {...register('fistAddress')} onChange={getAttr}>
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
          </select>
          <select {...register('secondAddress')}>
            {district?.map((item: RegionInterface) => {
              return (
                <option key={`key=${item.name}`} value={item.name}>
                  {item.name.split(' ')[1]}
                </option>
              );
            })}
          </select>
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
