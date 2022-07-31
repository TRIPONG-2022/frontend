import axios, { AxiosError } from 'axios';
import instance from './instance';

interface LoginType {
  loginId: string;
  password: string;
}

export const login = async ({ loginId, password }: LoginType) => {
  try {
    const data = await instance.post('/auth/login', {
      loginId,
      password,
    });
  } catch (err) {
    const errors = err as Error | AxiosError;
    if (axios.isAxiosError(errors)) {
      console.log('axios err');
      console.log(err);
    } else {
      console.log(err);
    }
  }
};

interface JoinType {
  nickName: string;
  loginId: string;
  email: string;
  password: string;
}

interface JoinErrorType {
  status: number;
  errors: [
    {
      code: number;
      field: string;
      invalidValue: string;
      kind: string;
      message: string;
    },
  ];
}

export const requestJoin = async (userData: JoinType) => {
  try {
    const { status, data } = await instance.post<JoinErrorType>(
      '/auth/signup/normal',
      userData,
    );
    if (data?.errors) {
      return data.errors[0].message;
    }
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
