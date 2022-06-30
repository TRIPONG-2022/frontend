import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { useCallback, useRef } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import AuthLayout from '@/layouts/AuthLayout';
import AuthInput from '@/components/shared/AuthInput';
import JoinNotiBar from '@/components/shared/JoinNotiBar';
import { DUPLICATE_MESSAGES } from '@/constants/message';
import { JoinSchema, JOIN_SCHEMA } from '@/constants/schema';

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

  const check = useRef(0);
  const onSubmit = useCallback(
    (data: JoinSchema) => {
      const { nickName, loginId, email } = data;

      // written : 유저가 작성한 정보
      // check : 서버로부터 응답받은 정보
      // divide : Error Message 구분자
      function checkDuplicate(written: string, check: string, divide: string) {
        if (written === check) {
          const key = 'DUPLICATE_' + divide.toUpperCase();
          setError('notiBar', {
            type: 'manual',
            message: DUPLICATE_MESSAGES[key],
          });
          return 1;
        }
        return 0;
      }

      check.current = 0;
      check.current += checkDuplicate(nickName, 'sample', 'nickName');
      check.current += checkDuplicate(loginId, 'sample', 'loginId');
      check.current += checkDuplicate(email, 'sample@sample.sample', 'email');

      if (!check.current) {
        // 유효성 검사 및 중복 검사 완료 후 실행할 코드
        alert(JSON.stringify(data));
      }
    },
    [setError],
  );

  return (
    <AuthLayout title="회원가입">
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
        <button
          type="submit"
          disabled={!isValid || !isDirty}
          aria-disabled={!isValid || !isDirty}
        >
          회원가입
        </button>
      </form>
    </AuthLayout>
  );
};

export default JoinPage;
