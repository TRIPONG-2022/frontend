import axios, { AxiosError } from 'axios';
import instance from './instance';

interface LoginType {
  loginId: string;
  password: string;
}

export const login = async ({ loginId, password }: LoginType) => {
  try {
    const response = await instance.post('/auth/login', {
      loginId,
      password,
    });

    const { data, isLogIn } = await userConfirm();

    return {
      data,
      isLogIn,
    };
  } catch (err) {
    const errors = err as Error | AxiosError;
    if (axios.isAxiosError(errors)) {
      console.log('axios err');
      console.log(err);
    } else {
      console.log(err);
    }
    return {
      isLogIn: false,
    };
  }
};

export const userConfirm = async () => {
  try {
    const data = await instance.get('/users/profile');
    console.log(data);
    return {
      data: data.data,
      isLogIn: true,
    };
  } catch (err) {
    const errors = err as Error | AxiosError;
    if (axios.isAxiosError(errors)) {
      console.log('axios err');
      console.log(err);
    } else {
      console.log(err);
    }
    return {
      isLogIn: false,
    };
  }
};
