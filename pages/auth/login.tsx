import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, LOGIN_SCHEMA } from '@/constants/schema';
import AuthLayout from '@/layouts/AuthLayout';
import AuthInput from '@/components/shared/AuthInput';
import Button from '@/components/shared/Button';

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
  };

  return (
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
  );
};

export default LoginPage;
