import { ProfilePatchSchema } from '@/constants/schema';
import { getBirthDate } from '@/utils/date';
import instance from './instance';

interface TagsType {
  tags: string[];
}
interface MyPageTags {
  tags: {
    tag: string | null;
  }[];
}

interface BirthDateType {
  birthDate: string | null;
}

export interface MyPageBirthDate {
  year: number | undefined;
  month: number | undefined;
  day: number | undefined;
}

interface MyPagePictureType {
  picture: File | string | null;
}

interface CommonProfileData {
  nickName: string | undefined;
  gender: string | undefined;
  city: string | undefined;
  district: string | undefined;
  introduction: string | null | undefined;
  phoneNumber: string | null | undefined;
}

export interface UserProfileData extends CommonProfileData {
  loginId: string | undefined;
  email: string;
  authentication: number;
  picture: string | null;
  latitude: number | undefined;
  longitude: number | undefined;
}

export interface UserProfileSendData extends CommonProfileData {
  latitude: string | null | undefined;
  longitude: string | null | undefined;
  [key: string]: File | string | undefined | null;
}

export const getProfileInfomation = async () => {
  try {
    const { data } = await instance.get<
      UserProfileData & TagsType & BirthDateType
    >('/users/profile');

    console.log(data);

    const { birthDate, tags, ...rest } = data;

    let convertedUserProfile: UserProfileData & MyPageTags & MyPageBirthDate = {
      tags: [],
      year: undefined,
      month: undefined,
      day: undefined,
      ...rest,
    };

    if (birthDate) {
      const [year, month, day] = birthDate?.split('-');
      convertedUserProfile.year = +year;
      convertedUserProfile.month = +month;
      convertedUserProfile.day = +day;
    }

    if (tags.length > 0) {
      convertedUserProfile.tags = tags.map((tag) => ({
        tag,
      }));
    }

    return convertedUserProfile;
  } catch (err) {
    console.log(err);
  }
};

export const patchProfileInformation = async (
  patchData: ProfilePatchSchema,
) => {
  const { year, month, day, tags, picture, latitude, longitude } = patchData;

  let convertedTags: string[] = [];
  if (tags) {
    convertedTags = tags.map((tag) => tag.tag);
  }

  let birthDate: string | null = null;
  if (year && month && day) {
    birthDate = getBirthDate(year, month, day);
  }

  let sendPicture: File | string | null = null;
  if (typeof picture === 'string') {
    sendPicture = picture;
  } else if (picture) {
    sendPicture = picture[0];
  }

  const sendData: UserProfileSendData & MyPagePictureType = {
    birthDate,
    latitude: latitude ? latitude + '' : '',
    longitude: longitude ? longitude + '' : '',
    picture: sendPicture,
    city: patchData.city,
    district: patchData.district,
    nickName: patchData.nickName,
    gender: patchData.gender,
    introduction: patchData.introduction,
    phoneNumber: patchData.phoneNumber,
  };

  console.log('updateUserData', patchData);
  try {
    const sendFormData = new FormData();

    for (const key in sendData) {
      if (sendData[key]) {
        sendFormData.append(key, sendData[key] || '');
      }
    }

    if (convertedTags) {
      sendFormData.append(
        'tags',
        convertedTags.length ? convertedTags + '' : [] + '',
      );
    }

    const response = await instance.patch('/users/profile', sendFormData);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
