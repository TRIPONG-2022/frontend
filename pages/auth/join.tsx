import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import AuthLayout from '@/layouts/AuthLayout';
import AuthInput from '@/components/shared/AuthInput';
import JoinNotiBar from '@/components/shared/JoinNotiBar';
import { JoinSchema, JOIN_SCHEMA } from '@/constants/schema';
import { joinApi } from 'api/auth';
import Button from '@/components/shared/Button';

const JoinPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { isValid, isDirty, errors },
  } = useForm<JoinSchema>({
    mode: 'onChange',
    resolver: yupResolver(JOIN_SCHEMA),
  });

  const onSubmit = useCallback(
    async (data: JoinSchema) => {
      const errMessage = await joinApi(data);
      console.log(errMessage);
      if (errMessage) {
        setError('notiBar', {
          message: errMessage.message,
        });
      }
    },
    [setError],
  );

  return (
    <AuthLayout title="회원가입" description="회원가입 페이지 입니다.">
      <JoinNotiBar
        {...register('notiBar')}
        errorMessages={errors.notiBar?.message}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          id="nickName"
          type="text"
          label="닉네임"
          errorMessage={errors.nickName?.message}
          {...register('nickName')}
        />
        <AuthInput
          id="loginId"
          type="text"
          label="아이디"
          errorMessage={errors.loginId?.message}
          {...register('loginId')}
        />
        <AuthInput
          id="email"
          type="text"
          label="이메일"
          errorMessage={errors.email?.message}
          {...register('email')}
        />
        <AuthInput
          id="password"
          type="password"
          label="비밀번호"
          errorMessage={errors.password?.message}
          {...register('password')}
        />
        <AuthInput
          id="passwordCheck"
          type="password"
          label="비밀번호 확인"
          errorMessage={errors.passwordCheck?.message}
          {...register('passwordCheck')}
        />
        <Button
          type="submit"
          disabled={!isValid || !isDirty}
          aria-disabled={!isValid || !isDirty}
          css={{ width: '100%' }}
        >
          회원가입
        </Button>
      </form>
    </AuthLayout>
  );
};

export default JoinPage;
