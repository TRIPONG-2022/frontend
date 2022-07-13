import axios, { AxiosError } from 'axios';
import instance from './instance';

interface LoginType {
  loginId: string;
  password: string;
}

export const login = async ({ loginId, password }: LoginType) => {
  try {
    const data = await instance.post('/users/login', {
      loginId,
      password,
    });
    console.log(data);
  } catch (err) {
    const errors = err as Error | AxiosError;

    if (axios.isAxiosError(errors)) {
      console.log('axios error');
    } else {
      console.log(err);
    }
  }
};
