import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SendEmailSchema, SEND_EMAIL_SCHEMA } from '@/constants/schema';
import AuthLayout from '@/layouts/AuthLayout';
import AuthInput from '@/components/shared/AuthInput';

const FindIDPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm<SendEmailSchema>({
    mode: 'onChange',
    resolver: yupResolver(SEND_EMAIL_SCHEMA),
  });

  const onSubmit = (data: SendEmailSchema) => {
    console.log(data);
    alert(JSON.stringify(data));
  };

  return (
    <AuthLayout
      title="아이디 찾기"
      description="이메일 주소로 가입하신 아이디가 전송됩니다."
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          id="email"
          type="email"
          label="이메일"
          errorMessage={errors.email?.message}
          {...register('email')}
        />
        <button
          type="submit"
          disabled={!isValid || !isDirty}
          aria-disabled={!isValid || !isDirty}
        >
          이메일 전송
        </button>
      </form>
    </AuthLayout>
  );
};

export default FindIDPage;
