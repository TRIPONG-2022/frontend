import {
  TagsData,
  MyPageTags,
  BirthDateData,
  MyPageBirthDate,
  UserProfileData,
  MyPagePictureType,
  GetMyPageReturnData,
  UserProfileSendData,
  GetMyPageDataOptions,
} from '@/types/my-page';
import instance from './instance';
import { getBirthDate } from '@/utils/date';
import { base64ToFile } from '@/utils/image';
import { ProfilePatchSchema } from '@/constants/schema';

export const getProfileInfomation = async () => {
  try {
    const { data } = await instance.get<
      UserProfileData & TagsData & BirthDateData
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
    sendPicture = base64ToFile(picture, 'profile_image');
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

    await instance.patch('/users/profile', sendFormData);
    alert('정상적으로 수정 완료 되었습니다!');
  } catch (err) {
    console.log(err);
    alert('수정에 실패하였습니다!');
  }
};

export const getMyPagePosts = async <T>({
  category,
  startDate: fromDate,
  endDate,
  page = 0,
  size,
}: GetMyPageDataOptions): Promise<GetMyPageReturnData<T>> => {
  try {
    const { data: total } = await instance.get(`/users/profile/posts`, {
      params: {
        category,
        fromDate,
        endDate,
      },
    });

    const { data: posts } = await instance.get(`/users/profile/posts`, {
      params: {
        page,
        size,
        category,
        fromDate,
        endDate,
      },
    });
    return { total: total.length, data: posts };
  } catch (err) {
    console.log(err);
    return { total: 0, data: [] };
  }
};

export const getMyPageReplies = async <T>({
  userId,
  startDate: fromDate,
  endDate,
  page = 0,
  size,
}: GetMyPageDataOptions): Promise<GetMyPageReturnData<T>> => {
  try {
    const { data: total } = await instance.get(
      `/users/profile/replies/${userId}`,
      {
        params: {
          fromDate,
          endDate,
        },
      },
    );

    const { data: replies } = await instance.get(
      `/users/profile/replies/${userId}`,
      {
        params: {
          page,
          size,
          fromDate,
          endDate,
        },
      },
    );

    return { total: total.length, data: replies };
  } catch (err) {
    console.log(err);
    return { total: 0, data: [] };
  }
};

export const getMyPageLikePosts = async <T>({
  category,
  page = 0,
  size,
}: GetMyPageDataOptions): Promise<GetMyPageReturnData<T>> => {
  try {
    const { data: total } = await instance.get(`/users/profile/likes`, {
      params: {
        category,
      },
    });

    const { data: posts } = await instance.get(`/users/profile/likes`, {
      params: {
        page,
        size,
        category,
      },
    });
    return { total: total.length, data: posts };
  } catch (err) {
    console.log(err);
    return { total: 0, data: [] };
  }
};
