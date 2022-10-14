import * as yup from 'yup';
import { SCHEMA_MESSAGES } from './message';
import { PostCategory } from '@/types/post';

export const NICKNAME_SCHEMA = yup
  .string()
  .min(2, SCHEMA_MESSAGES.WRONG_NICK_NAME_LENGTH)
  .max(11, SCHEMA_MESSAGES.WRONG_NICK_NAME_LENGTH)
  .matches(/^(?!kakao).+/, SCHEMA_MESSAGES.DONT_START_KAKAO_STRING)
  .matches(/^(?!naver).+/, SCHEMA_MESSAGES.DONT_START_NAVER_STRING)
  .matches(/^(?!google).+/, SCHEMA_MESSAGES.DONT_START_GOOGLE_STRING)
  .matches(/^(?!facebook).+/, SCHEMA_MESSAGES.DONT_START_FACEBOOK_STRING)
  .matches(
    /^[가-힣a-zA-Z0-9][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
    SCHEMA_MESSAGES.WRONG_NICKNAME_FORMAT,
  )
  .required(SCHEMA_MESSAGES.REQUIRED_FIELD);

export const LOGIN_ID_SCHEMA = yup
  .string()
  .min(5, SCHEMA_MESSAGES.WRONG_LOGIN_ID_LENGTH)
  .max(11, SCHEMA_MESSAGES.WRONG_LOGIN_ID_LENGTH)
  .matches(
    /^[a-z0-9][^ㄱ-ㅎ가-힣A-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
    SCHEMA_MESSAGES.WRONG_LOGINID_FORMAT,
  )
  .required(SCHEMA_MESSAGES.REQUIRED_FIELD);

export const EMAIL_SCHEMA = yup
  .string()
  .email(SCHEMA_MESSAGES.WRONG_EMAIL_FORMAT)
  .required(SCHEMA_MESSAGES.REQUIRED_FIELD);

export const PASSWORD_CHEMA = yup
  .string()
  .min(4, SCHEMA_MESSAGES.WRONG_PASSWORD_LENGTH)
  .max(15, SCHEMA_MESSAGES.WRONG_PASSWORD_LENGTH)
  .matches(new RegExp(''))
  .required(SCHEMA_MESSAGES.REQUIRED_FIELD);

export const LOGIN_SCHEMA = yup.object({
  loginId: yup.string().required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  password: yup.string().required(SCHEMA_MESSAGES.REQUIRED_FIELD),
});

export const ADD_INFORMATION_SCHEMA = yup.object({
  name: yup
    .string()
    .matches(
      /^[a-zA-Z가-힣][^0-9!@#$^&%*()+=-\[\]\/{}|:<>?,.]*$/,
      SCHEMA_MESSAGES.NAME_FORMAT,
    )
    .required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  gender: yup
    .string()
    .matches(/^((?!default).)*$/)
    .required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  year: yup.number().required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  month: yup.number().required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  day: yup.number().required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  city: yup
    .string()
    .matches(/^((?!default).)*$/)
    .required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  district: yup
    .string()
    .matches(/^((?!default).)*$/)
    .required(SCHEMA_MESSAGES.REQUIRED_FIELD),
});

export type InformationSchema = yup.InferType<typeof ADD_INFORMATION_SCHEMA>;

export const JOIN_SCHEMA = yup.object({
  nickName: NICKNAME_SCHEMA,
  loginId: LOGIN_ID_SCHEMA,
  email: EMAIL_SCHEMA,
  password: PASSWORD_CHEMA,
  passwordCheck: yup
    .string()
    .oneOf([yup.ref('password'), null], SCHEMA_MESSAGES.NOT_MATCH_PASSWORD)
    .required(SCHEMA_MESSAGES.REQUIRED_FIELD),
});

export const PROFILE_PATCH_SCHEMA = yup.object({
  email: EMAIL_SCHEMA,
  nickName: NICKNAME_SCHEMA,
  username: yup.string().nullable(),
  gender: yup
    .string()
    .matches(/^((?!default).)*$/)
    .required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  authentication: yup.number(),
  year: yup.number(),
  month: yup.number(),
  day: yup.number(),
  city: yup
    .string()
    .matches(/^((?!default).)*$/)
    .required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  district: yup
    .string()
    .matches(/^((?!default).)*$/)
    .required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  introduction: yup.string().max(500).nullable(),
  phoneNumber: yup
    .string()
    .nullable()
    .matches(/^[0-9]*$/g, {
      message: SCHEMA_MESSAGES.WRONG_PHONE_NUMBER_FORMAT,
    }),
  picture: yup.mixed(),
  tags: yup.array().nullable(),
  latitude: yup.number().nullable(),
  longitude: yup.number().nullable(),
});

export const RESET_PASSWORD_SCHEMA = yup.object({
  password: PASSWORD_CHEMA,
  passwordCheck: yup
    .string()
    .oneOf([yup.ref('password'), null], SCHEMA_MESSAGES.NOT_MATCH_PASSWORD)
    .required(SCHEMA_MESSAGES.REQUIRED_FIELD),
});

export const SEND_EMAIL_SCHEMA = yup.object({
  email: EMAIL_SCHEMA,
});

const requiredWhenCategoryIsGathering =
  (message: string) => (category: string, field: any) => {
    return category === 'gathering' ? field.required(message) : field;
  };

export const POST_EDITOR_SCHEMA = yup.object({
  title: yup.string().required('제목을 입력해주세요.'),
  category: yup
    .mixed<PostCategory>()
    .oneOf(Object.values(PostCategory))
    .required('카테고리를 입력해주세요.'),
  tags: yup.array().of(yup.string().required()).required(),
  content: yup.string().required('내용을 입력해주세요.'),
  totalHeadCount: yup
    .number()
    .min(1)
    .when(
      'category',
      requiredWhenCategoryIsGathering('모집인원을 입력해주세요.'),
    )
    .required(),
  startDate: yup
    .date()
    .when(
      'category',
      requiredWhenCategoryIsGathering('시작 일자를 입력해주세요.'),
    )
    .required(),
  endDate: yup
    .date()
    .when(
      'category',
      requiredWhenCategoryIsGathering('종료 일자를 입력해주세요.'),
    )
    .required(),
  thumbnail: yup.mixed().optional(),
});

export const REPLY_SCHEMA = yup.object({
  content: yup
    .string()
    .max(500, '500자 이하로 입력해주세요.')
    .required('내용을 입력해주세요.'),
});

export type JoinSchema = yup.InferType<typeof JOIN_SCHEMA>;
export type ProfilePatchSchema = yup.InferType<typeof PROFILE_PATCH_SCHEMA>;
export type LoginSchema = yup.InferType<typeof LOGIN_SCHEMA>;
export type SendEmailSchema = yup.InferType<typeof SEND_EMAIL_SCHEMA>;
export type ResetPasswordSchema = yup.InferType<typeof RESET_PASSWORD_SCHEMA>;

export const ADDROLE_SCHEMA = yup.object({
  roleName: yup.string().required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  description: yup.string().required(SCHEMA_MESSAGES.REQUIRED_FIELD),
});

export type AddRoleSchema = yup.InferType<typeof ADDROLE_SCHEMA>;
export type PostEditorSchema = yup.InferType<typeof POST_EDITOR_SCHEMA>;
export type ReplySchema = yup.InferType<typeof REPLY_SCHEMA>;
