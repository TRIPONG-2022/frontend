import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, LOGIN_SCHEMA } from '@/constants/schema';
import AuthLayout from '@/layouts/AuthLayout';
import AuthInput from '@/components/shared/AuthInput';
import Button from '@/components/shared/Button';
import IconButton from '@/components/shared/IconButton';
import Link from 'next/link';
import styled from 'styled-components';
import { login } from 'api/auth';

const LoginPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm<LoginSchema>({
    mode: 'onChange',
    resolver: yupResolver(LOGIN_SCHEMA),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
    alert(JSON.stringify(data));
    const { loginId, password } = data;
    login(data);
    console.log('로그인 넘김');
  };

  return (
    <>
      <AuthLayout title="로그인">
        <form onSubmit={handleSubmit(onSubmit)}>
          <AuthInput
            id="loginId"
            type="text"
            label="아이디"
            placeholder="아이디를 입력하세요."
            errorMessage={errors.loginId?.message}
            {...register('loginId')}
          />
          <AuthInput
            id="password"
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력하세요."
            errorMessage={errors.password?.message}
            {...register('password')}
          />
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
            로그인
          </Button>
        </form>
      </AuthLayout>
      <IconButton
        icon="KakaoIcon"
        aria-label="카카오 로그인"
        colorScheme="kakao"
        isRound
        size="lg"
      />
      <IconButton
        icon="FacebookIcon"
        aria-label="페이스북 로그인"
        colorScheme="facebook"
        isRound
        size="lg"
      />
      <IconButton
        icon="KakaoIcon"
        aria-label="카카오 로그인"
        colorScheme="kakao"
        isRound
        size="lg"
      />
      <Div>
        <Link href={'http://13.209.251.206:8080/oauth2/authorization/google'}>
          <a>구글 버튼</a>
        </Link>
        <br />
        <Link href={'http://13.209.251.206:8080/oauth2/authorization/kakao'}>
          <a>카카오 버튼</a>
        </Link>
        <br />
        <Link href={'http://13.209.251.206:8080/oauth2/authorization/naver'}>
          <a>네이버 버튼</a>
        </Link>
        <br />
        <Link href={'http://13.209.251.206:8080/oauth2/authorization/facebook'}>
          <a>페이스북 버튼</a>
        </Link>
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default LoginPage;
