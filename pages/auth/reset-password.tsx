import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import AuthInput from '@/components/shared/AuthInput';
import AuthLayout from '@/layouts/AuthLayout';
import { ResetPasswordSchema, RESET_PASSWORD_SCHEMA } from '@/constants/schema';

function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm<ResetPasswordSchema>({
    mode: 'onChange',
    resolver: yupResolver(RESET_PASSWORD_SCHEMA),
  });

  const onSubmit = (data: ResetPasswordSchema) => {
    console.log(data);
    alert(JSON.stringify(data));
  };

  return (
    <AuthLayout title="비밀번호 재설정">
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
        <button
          type="submit"
          disabled={!isValid || !isDirty}
          aria-disabled={!isValid || !isDirty}
        >
          확인
        </button>
      </form>
    </AuthLayout>
  );
}

export default ResetPasswordPage;
