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
  year?: number;
  month?: number;
  day?: number;
}

export interface MyPagePictureType {
  picture: File | string | null;
}

export interface CommonProfileData {
  nickName?: string;
  gender?: string;
  city?: string;
  district?: string;
  introduction?: string | null;
  phoneNumber?: string | null;
}

export interface UserProfileData extends CommonProfileData {
  loginId?: string;
  email: string;
  name: string;
  authentication: number;
  picture: string | null;
  latitude?: number;
  longitude?: number;
}

export interface UserProfileSendData extends CommonProfileData {
  latitude?: string | null;
  longitude?: string | null;
  [key: string]: File | string | undefined | null;
}
