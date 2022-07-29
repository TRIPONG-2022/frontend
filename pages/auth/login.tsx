import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { login } from 'api/auth';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, LOGIN_SCHEMA } from '@/constants/schema';
import AuthLayout from '@/layouts/AuthLayout';
import AuthInput from '@/components/shared/AuthInput';
import Button from '@/components/shared/Button';
import IconButton from '@/components/shared/IconButton';
import { Divider, Forgot, SignUp } from '@/components/Login';
import { LoginDiv } from '@/layouts/GNB/GNB.styled';

const LoginPage: NextPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm<LoginSchema>({
    mode: 'onChange',
    resolver: yupResolver(LOGIN_SCHEMA),
  });

  const onSubmit = (data: LoginSchema) => {
    login(data);
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
          <Forgot />
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
        <Divider />
        <Container>
          <IconButton
            icon="KakaoIcon"
            aria-label="카카오 로그인"
            colorScheme="kakao"
            isRound
            size="xlg"
            onClick={() =>
              router.push(
                'http://13.209.251.206:8080/oauth2/authorization/kakao',
              )
            }
          />
          <IconButton
            icon="NaverIcon"
            aria-label="네이버 로그인"
            colorScheme="naver"
            isRound
            size="xlg"
            onClick={() =>
              router.push(
                'http://13.209.251.206:8080/oauth2/authorization/naver',
              )
            }
          />

          <IconButton
            icon="GoogleIcon"
            aria-label="구글 로그인"
            colorScheme="google"
            isRound
            size="xlg"
            onClick={() =>
              router.push(
                'http://13.209.251.206:8080/oauth2/authorization/google',
              )
            }
          />

          <IconButton
            icon="FacebookIcon"
            aria-label="페이스북 로그인"
            colorScheme="facebook"
            isRound
            size="xlg"
            onClick={() =>
              router.push(
                'http://13.209.251.206:8080/oauth2/authorization/facebook',
              )
            }
          />
        </Container>
        <SignUp />
      </AuthLayout>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export default LoginPage;
