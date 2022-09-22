import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { login } from 'api/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, LOGIN_SCHEMA } from '@/constants/schema';
import AuthLayout from '@/layouts/AuthLayout';
import AuthInput from '@/components/shared/AuthInput';
import Button from '@/components/shared/Button';
import IconButton from '@/components/shared/IconButton';
import Link from 'next/link';
import { OAUTH_DATA } from '@/constants/Oauth_data';
import Divider from '@/components/Login/Divider';
import FindAccountArea from '@/components/Login/FindAccountArea';
import SignUpArea from '@/components/Login/SingUpArea/SignUpArea';
import { useDispatch } from 'react-redux';
import { saveUser } from '@/store/slice/userSlice';
import { useRouter } from 'next/router';

const LoginPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm<LoginSchema>({
    mode: 'onChange',
    resolver: yupResolver(LOGIN_SCHEMA),
  });

  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async (logInData: LoginSchema) => {
    const { userInfo, isError, error } = await login(logInData);
    if (userInfo) {
      dispatch(saveUser(userInfo));
      router.push('/');
    } else if (isError) {
      console.log(error);
    }
  };

  const onClickOAuthLink = (linkData: string) => () => {
    router.push(
      `${process.env.NEXT_PUBLIC_BASE_URL}/oauth2/authorization/${linkData}`,
    );
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
          <FindAccountArea />
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
          {OAUTH_DATA.map(({ iconName, title, colorSchemeName, linkData }) => (
            <IconButton
              key={linkData}
              icon={iconName}
              aria-label={title}
              colorScheme={colorSchemeName}
              isRound
              size="xlg"
              onClick={onClickOAuthLink(linkData)}
            />
          ))}
        </Container>
        <SignUpArea />
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
