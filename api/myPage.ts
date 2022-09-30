import instance from './instance';

type BirthDateType = { birthDate: string };

type TagsType = {
  tags: string[];
};
interface MyPageTagsType {
  tags: {
    tag: string | null;
  }[];
}

export type MyPageBirthDateType = {
  year: number | null;
  month: number | null;
  day: number | null;
};

export type UserDataType = {
  loginId: string;
  email: string;
  nickName: string;
  name: string;
  gender: string;
  picture: string | undefined;
  authentication: number;
  city: string;
  district: string;
  introduction: string;
  phoneNumber: string;
  latitude: number;
  longitude: number;
};

export type UserSendDataType = {
  nickName: string | undefined;
  picture: File | undefined;
  birthDate: string | null;
  gender: string | undefined;
  introduction: string | undefined;
  phoneNumber: string | undefined;
  city: string | undefined;
  district: string | undefined;
  latitude: string | undefined;
  longitude: string | undefined;
  [key: string]: File | string | undefined | null;
};

export const getProfileInfomation = async () => {
  try {
    const { status, data } = await instance.get<
      UserDataType & TagsType & BirthDateType
    >('/users/profile');

    console.log('a', data);

    const { birthDate, tags, ...rest } = data;

    let convertedUserProfile: UserDataType &
      MyPageTagsType &
      MyPageBirthDateType = {
      ...rest,
      tags: [],
      year: null,
      month: null,
      day: null,
    };

    if (birthDate) {
      const [year, month, day] = birthDate.split('-');
      const convertedTags = tags.map((tag) => ({
        tag,
      }));

      convertedUserProfile = {
        year: +year,
        month: +month,
        day: +day,
        tags: convertedTags,
        ...rest,
      };
    }

    return convertedUserProfile;
  } catch (err) {
    console.log(err);
  }
};

export const patchProfileInformation = async (
  updateUserData: UserSendDataType,
  tags: string[],
) => {
  console.log('updateUserData', updateUserData);
  try {
    const sendFormData = new FormData();

    for (const key in updateUserData) {
      if (updateUserData[key]) {
        if (key === 'picture') {
          sendFormData.delete('picture');
        } else {
          sendFormData.append(key, updateUserData[key] || '');
        }
      }
    }

    // if (tags) {
    //   sendFormData.append('tags', tags.length ? tags + '' : [] + '');
    // }

    const response = await instance.patch('/users/profile', sendFormData, {
      withCredentials: true,
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
