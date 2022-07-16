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
  const [isSuccessFindID, setIsSuccessFindID] = useState<boolean>(false);
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
    }
  };

  return (
    <AuthLayout
      title="아이디 찾기"
      description="이메일 주소로 가입하신 아이디가 전송됩니다."
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
