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

export const requestFindID = async (email: string) => {
  try {
    const { data } = await instance.post('/users/auth/find/id', {
      email,
    });
    return {
      isError: false,
      data,
    };
  } catch (error) {
    return {
      isError: true,
      error: '해당 유저가 존재하지 않습니다. 이메일을 확인해주세요.',
    };
  }
};
