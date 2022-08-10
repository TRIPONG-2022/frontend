import axios, { AxiosError } from 'axios';
import instance from './instance';

interface LoginType {
  loginId: string;
  password: string;
}

export interface ConfirmUserResponse {
  authentication: number;
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

export const requestVerifyEmail = async (userId: string, email: string) => {
  try {
    const { data } = await instance.post('/users/auth/send/email', {
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

export const requestFindPassword = async (email: string) => {
  try {
    const { data } = await instance.post('/users/auth/verify-request', {
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

export const requestResetPassword = async (
  validLink: string,
  newPassword: string,
) => {
  try {
    const { data } = await instance.patch('/users/auth/reset-password', {
      validLink,
      newPassword,
    });
    return {
      isError: false,
      data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        isError: true,
        error: '이메일 유효 링크 시간이 경과되었거나 유효하지 않습니다.',
      };
    } else {
      return {
        isError: true,
        error: '알 수 없는 오류가 발생하였습니다.',
      };
    }
  }
};
