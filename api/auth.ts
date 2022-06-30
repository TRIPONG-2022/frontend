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
    // 엇 isAxiosError 뭐지 그리고 AxiosError는 어떤 경우들이 속할까?? 그냥 Error와는 차이점이 있을거다
    if (axios.isAxiosError(errors)) {
      // do whatever you want with native error
    } else {
      // do what you want with your axios error
    }
  }
};
