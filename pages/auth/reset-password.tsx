import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import AuthInput from '@/components/shared/AuthInput';
import AuthLayout from '@/layouts/AuthLayout';
import { ResetPasswordSchema, RESET_PASSWORD_SCHEMA } from '@/constants/schema';
import Button from '@/components/shared/Button';
import { requestResetPassword } from '@/api/auth';

function ResetPasswordPage() {
  const router = useRouter();
  const [error, setError] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm<ResetPasswordSchema>({
    mode: 'onChange',
    resolver: yupResolver(RESET_PASSWORD_SCHEMA),
  });

  const onSubmit = async ({ password }: ResetPasswordSchema) => {
    const { emailValidLink } = router.query;
    const validLink =
      typeof emailValidLink === 'object' ? emailValidLink[0] : emailValidLink;

    const { isError, error, data } = await requestResetPassword(
      validLink || '1',
      password,
    );
    if (isError && error) {
      setError(error);
      setIsSuccess(false);
    } else {
      setError('');
      setIsSuccess(true);
    }
  };

  if (isSuccess) {
    return (
      <AuthLayout
        title="비밀번호 재설정되었습니다."
        description="새로운 비밀번호로 로그인하세요."
      >
        <Button
          size="lg"
          type="button"
          css={`
            width: 100%;
            margin-top: 0.5rem;
          `}
          onClick={() => router.push('/auth/login')}
        >
          로그인으로 이동
        </Button>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="비밀번호 재설정" errorMessage={error}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          id="password"
          label="비밀번호"
          type="password"
          {...register('password')}
          errorMessage={errors.password?.message}
        />
        <AuthInput
          id="passwordCheck"
          label="비밀번호 확인"
          type="password"
          {...register('passwordCheck')}
          errorMessage={errors.passwordCheck?.message}
        />
        <Button
          size="lg"
          type="submit"
          css={`
            width: 100%;
            margin-top: 0.5rem;
          `}
          disabled={!isValid || !isDirty}
          aria-disabled={!isValid || !isDirty}
        >
          비밀번호 재설정
        </Button>
      </form>
    </AuthLayout>
  );
}

export default ResetPasswordPage;
