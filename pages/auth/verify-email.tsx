import type { NextPage } from 'next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { SendEmailSchema, SEND_EMAIL_SCHEMA } from '@/constants/schema';
import AuthLayout from '@/layouts/AuthLayout';
import AuthInput from '@/components/shared/AuthInput';
import Button from '@/components/shared/Button';
import { requestVerifyEmail } from 'api/auth';

const VerifyEmailPage: NextPage = () => {
  const router = useRouter();
  const [error, setError] = useState<string>('');
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm<SendEmailSchema>({
    mode: 'onChange',
    resolver: yupResolver(SEND_EMAIL_SCHEMA),
  });

  const onSubmit = async ({ email }: SendEmailSchema) => {
    const { isError, error, data } = await requestVerifyEmail('user1', email);
    if (error) {
      setError(error);
    } else {
      setIsEmailSent(true);
    }
  };

  if (isEmailSent) {
    return (
      <AuthLayout
        title="이메일 인증"
        description="입력하신 이메일 주소로 인증 메일이 전송되었습니다."
      >
        <Button
          size="lg"
          type="submit"
          css={`
            width: 100%;
            margin-top: 0.5rem;
          `}
          onClick={() => router.replace('/')}
        >
          홈으로 가기
        </Button>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="이메일 인증"
      description="이메일 주소로 이메일 인증 링크가 전송됩니다."
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
            margin-top: 0.5rem;
          `}
          disabled={!isValid || !isDirty}
          aria-disabled={!isValid || !isDirty}
        >
          이메일 전송
        </Button>
      </form>
    </AuthLayout>
  );
};

export default VerifyEmailPage;
