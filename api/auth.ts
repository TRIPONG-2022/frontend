import axios, { AxiosError } from 'axios';
import instance from './instance';

interface LoginType {
  loginId: string;
  password: string;
}

export interface ConfirmUserResponse {
  authentication: any;
  name: string;
  nickName: string;
  picture: string;
}

export const login = async ({ loginId, password }: LoginType) => {
  try {
    const response = await instance.post('/auth/login', {
      loginId,
      password,
    });

    const { userInfo, isError, error } = await userConfirm();

    return {
      userInfo,
      isError,
      error,
    };
  } catch (err) {
    return {
      isError: true,
      error: '로그인 실패하였습니다.',
    };
  }
};

export const userConfirm = async () => {
  try {
    const data = await instance.get<ConfirmUserResponse>('/users/profile');

    if (data) {
      const userInfo = {
        ...data.data,
        authentication: !!data.data.authentication,
      };
      return {
        userInfo,
        isError: false,
      };
    }
    return {
      isError: true,
      error: '유저 데이터가 비어있습니다.',
    };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return {
        isError: true,
        error: '해당 유저 정보를 가져오는데 실패하였습니다.',
      };
    } else {
      return {
        isError: true,
        error: '알 수 없는 오류',
      };
    }
  }
};

export const logout = async () => {
  try {
    const data = await instance.post('/users/logout', {});

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
