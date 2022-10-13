export interface TagsData {
  tags: string[];
}
export interface MyPageTags {
  tags: {
    tag: string | null;
  }[];
}

export interface BirthDateData {
  birthDate: string | null;
}

export interface MyPageBirthDate {
  year: number | undefined;
  month: number | undefined;
  day: number | undefined;
}

export interface MyPagePictureType {
  picture: File | string | null;
}

export interface CommonProfileData {
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
