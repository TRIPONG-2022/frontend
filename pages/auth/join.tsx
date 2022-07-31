import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { useCallback, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import AuthLayout from '@/layouts/AuthLayout';
import AuthInput from '@/components/shared/AuthInput';
import Button from '@/components/shared/Button';
import { requestJoin } from '@/api/auth';
import { JoinSchema, JOIN_SCHEMA } from '@/constants/schema';
import { useRouter } from 'next/router';

const JoinPage: NextPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm<JoinSchema>({
    mode: 'onChange',
    resolver: yupResolver(JOIN_SCHEMA),
  });

  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = useCallback(
    async (data: JoinSchema) => {
      const errMessage = await requestJoin(data);
      if (errMessage) {
        setErrorMessage(errMessage);
      } else {
        alert('회원가입 완료');
        router.replace('/auth/login');
      }
    },
    [router],
  );

  return (
    <AuthLayout title="회원가입" errorMessage={errorMessage}>
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
