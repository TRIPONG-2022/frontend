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
