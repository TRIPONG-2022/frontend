import * as yup from 'yup';
import { SCHEMA_MESSAGES } from './message';

export const NICKNAME_SCHEMA = yup
  .string()
  .matches(
    /^[가-힣a-zA-Z0-9][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
    SCHEMA_MESSAGES.WRONG_NICKNAME_FORMAT,
  )
  .required(SCHEMA_MESSAGES.REQUIRED_FIELD);

export const LOGIN_ID_SCHEMA = yup
  .string()
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
  .matches(new RegExp(''))
  .required(SCHEMA_MESSAGES.REQUIRED_FIELD);

// 여기 위에 스키마들은 단일 스키마??

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
  // 정규표현식을 어제 처음 공부해서 사용해봤는데 이 방법이 맞을까요?? 특히 특수문자 제외
  gender: yup
    .string()
    .matches(/^((?!default).)*$/)
    .required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  // gender는 없어도 될 것 같기도하고..
  year: yup.number().required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  month: yup.number().required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  day: yup.number().required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  firstAddress: yup
    .string()
    .matches(/^((?!default).)*$/)
    .required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  secondAddress: yup
    .string()
    .matches(/^((?!default).)*$/)
    .required(SCHEMA_MESSAGES.REQUIRED_FIELD),
});

export type InformationScheme = yup.InferType<typeof ADD_INFORMATION_SCHEMA>;


export const JOIN_SCHEMA = yup.object({
  nickName: NICKNAME_SCHEMA,
  loginId: LOGIN_ID_SCHEMA,
  email: EMAIL_SCHEMA,
  password: PASSWORD_CHEMA,
  passwordCheck: yup
    .string()
    .oneOf([yup.ref('password'), null], SCHEMA_MESSAGES.NOT_MATCH_PASSWORD)
    .required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  notiBar: yup.string(),
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

export type JoinSchema = yup.InferType<typeof JOIN_SCHEMA>;
export type LoginSchema = yup.InferType<typeof LOGIN_SCHEMA>;
export type SendEmailSchema = yup.InferType<typeof SEND_EMAIL_SCHEMA>;
export type ResetPasswordSchema = yup.InferType<typeof RESET_PASSWORD_SCHEMA>;
