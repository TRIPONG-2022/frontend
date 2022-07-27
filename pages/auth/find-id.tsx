import type { NextPage } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SendEmailSchema, SEND_EMAIL_SCHEMA } from '@/constants/schema';
import AuthLayout from '@/layouts/AuthLayout';
import AuthInput from '@/components/shared/AuthInput';
import Button from '@/components/shared/Button';
import { requestFindID } from '@/api/auth';

const FindIDPage: NextPage = () => {
  const router = useRouter();
  const [error, setError] = useState<string>('');
  const [userLoginID, setUserLoginID] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm<SendEmailSchema>({
    mode: 'onChange',
    resolver: yupResolver(SEND_EMAIL_SCHEMA),
  });

  const onSubmit = async ({ email }: SendEmailSchema) => {
    const { isError, error, data } = await requestFindID(email);
    if (error) {
      setError(error);
      setUserLoginID('');
    } else {
      setError('');
      setUserLoginID(data);
    }
  };

  if (userLoginID) {
    return (
      <AuthLayout
        title="아이디 찾기"
        description="찾으신 아이디는 다음과 같습니다."
        errorMessage={error}
      >
        <AuthInput
          id="loginId"
          label="아이디"
          value={userLoginID}
          readOnly
          disabled
        />
        <Button
          size="lg"
          type="button"
          css={`
            width: 100%;
            margin-top: 1rem;
          `}
          onClick={() => router.push('/auth/login')}
        >
          로그인으로 이동
        </Button>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="아이디 찾기"
      description="가입하신 이메일 주소를 입력해주세요."
      errorMessage={error}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          id="email"
          type="email"
          label="이메일"
          errorMessage={errors.email?.message}
          {...register('email')}
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
          아이디 찾기
        </Button>
      </form>
    </AuthLayout>
  );
};

export default FindIDPage;
