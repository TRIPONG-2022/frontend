import { AxiosError } from 'axios';
import instance from './instance';

interface JoinType {
  email: string;
  loginId: string;
  nickName: string;
  password: string;
}

interface JoinResponseType {
  errors: [{ code: number; message: string }];
}

export const joinApi = async (joinData: JoinType) => {
  try {
    const { data } = await instance.post<JoinResponseType>(
      '/auth/signup/normal',
      joinData,
    );
    console.log(data);

    if (data?.errors) {
      const { code, message } = data.errors[0];
      console.log(data);
      console.log(code);
      return { message };
    }
  } catch (err) {
    const errors = err as Error | AxiosError;
    console.log(errors);
  }
};
