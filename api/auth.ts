import axios, { AxiosError } from 'axios';
import instance from './instance';

interface LoginType {
  loginId: string;
  loginPwd: string;
}

const login = async ({ loginId, loginPwd }: LoginType) => {
  try {
    const { data } = await instance.post('/login', {
      loginId,
      loginPwd,
    });
    console.log(data);
  } catch (err) {
    const errors = err as Error | AxiosError;

    if (axios.isAxiosError(errors)) {
    } else {
    }
  }
};

export const requestVerifyEmail = async (userId: string, email: string) => {
  try {
    const { data } = await instance.post('/users/auth/email/send', {
      userId,
      email,
    });
    return {
      isError: false,
      data,
    };
  } catch (error) {
    return {
      isError: true,
      error: '이메일 전송에 실패하였습니다.',
    };
  }
};
