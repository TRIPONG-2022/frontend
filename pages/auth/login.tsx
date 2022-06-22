import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, LOGIN_SCHEMA } from '@/constants/schema';
import AuthLayout from '@/layouts/AuthLayout';
import AuthInput from '@/components/shared/AuthInput';

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
          errorMessage={errors.loginId?.message}
          {...register('loginId')}
        />
        <AuthInput
          id="password"
          type="password"
          label="비밀번호"
          errorMessage={errors.password?.message}
          {...register('password')}
        />
        <button
          type="submit"
          disabled={!isValid || !isDirty}
          aria-disabled={!isValid || !isDirty}
        >
          로그인
        </button>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
