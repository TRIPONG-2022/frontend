import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, LOGIN_SCHEMA } from '@/constants/schema';
import AuthLayout from '@/layouts/AuthLayout';
import AuthInput from '@/components/shared/AuthInput';
import Button from '@/components/shared/Button';
import IconButton from '@/components/shared/IconButton';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { login } from 'api/auth';
import { useRouter } from 'next/router';

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
    console.log(data);
    login(data);
  };

  // 로그인 시 token을 받고,  token있을 경우에

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
          <ForgotContainer>
            <ForgotPwdText>아이디 찾기</ForgotPwdText>
            <ForgotPwdText
              pwd
              onClick={() => router.push('/auth/find-password')}
            >
              비밀번호 찾기
            </ForgotPwdText>
          </ForgotContainer>
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
        <Divider>
          <DividerText>또는</DividerText>
        </Divider>
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
        <SignUp>
          계정이 없으신가요?
          <SingUpBtn onClick={() => router.push('/auth/join')}>
            회원가입
          </SingUpBtn>
        </SignUp>
      </AuthLayout>

      <OuterContainer></OuterContainer>
    </>
  );
};

interface ForgotProps {
  pwd?: boolean;
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OuterContainer = styled.div`
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
  padding: 0 1.25rem;
  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const ForgotContainer = styled.div`
  display: flex;
  justify-content: end;
`;

const ForgotPwdText = styled.em<ForgotProps>`
  display: inline-block;
  position: relative;
  padding-left: 10px;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[500]};
  text-align: right;
  cursor: pointer;
  ${({ pwd }) =>
    pwd &&
    css`
      &::after {
        display: block;
        position: absolute;
        top: 3px;
        left: 5px;
        width: 1px;
        height: 8px;
        background-color: ${({ theme }) => theme.colors.gray[300]};
        content: '';
      }
    `}
`;

const Divider = styled.div`
  position: relative;
  margin: 2.5rem 0;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

const DividerText = styled.div`
  font-size: red;
  &::before {
    background: ${({ theme }) => theme.colors.gray[400]};
    height: 1px;
    position: absolute;
    right: 0;
    width: 40%;
    top: 50%;
    content: '';
  }
  &::after {
    background: ${({ theme }) => theme.colors.gray[400]};
    height: 1px;
    position: absolute;
    left: 0;
    width: 40%;
    top: 50%;
    content: '';
  }
`;

const SignUp = styled.p`
  text-align: center;
  margin: 3rem 0;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

const SingUpBtn = styled.em`
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors.primary.hex};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default LoginPage;
