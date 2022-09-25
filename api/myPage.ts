import instance from './instance';

export type UserDataType = {
  loginId: string;
  email: string;
  nickName: string;
  name: string | undefined;
  gender: string;
  picture: string | undefined;
  authentication: number | undefined;
  birthDate: string | undefined;
  city: string | undefined;
  district: string | undefined;
  introduction: string | undefined;
  phoneNumber: string | undefined;
  tags: {
    tag: string | null;
  }[];
};

type UserSendDataType = {
  loginId: string;
  email: string;
  nickName: string;
  name: string | undefined;
  gender: string;
  picture: FormData | undefined;
  authentication: number | undefined;
  birthDate: string | undefined;
  city: string | undefined;
  district: string | undefined;
  introduction: string | undefined;
  phoneNumber: string | undefined;
  tags: {
    tag: string | null;
  }[];
};

export const getProfileInfomation = async () => {
  try {
    const { status, data } = await instance.get<UserDataType>('/users/profile');
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const patchProfileInformation = async (
  updateUserData: UserSendDataType,
) => {
  console.log(updateUserData);
  try {
    const response = await instance.patch('/users/profile', updateUserData, {
      headers: {
        'Content-Type': 'multipart/form-data;',
      },
      withCredentials: true,
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
