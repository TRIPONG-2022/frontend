import * as yup from 'yup';
import { SCHEMA_MESSAGES } from './message';

export const NICKNAME_SCHEMA = yup
  .string()
  .min(2)
  .max(20)
  .required(SCHEMA_MESSAGES.REQUIRED_FIELD);
export const LOGIN_ID_SCHEMA = yup
  .string()
  .min(2)
  .max(20)
  .required(SCHEMA_MESSAGES.REQUIRED_FIELD);
export const EMAIL_SCHEMA = yup
  .string()
  .email()
  .required(SCHEMA_MESSAGES.REQUIRED_FIELD);
export const PASSWORD_CHEMA = yup
  .string()
  .matches(new RegExp(''))
  .required(SCHEMA_MESSAGES.REQUIRED_FIELD);

export const LOGIN_SCHEMA = yup.object({
  loginId: yup.string().required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  password: yup.string().required(SCHEMA_MESSAGES.REQUIRED_FIELD),
});

export const JOIN_SCHEMA = yup.object({
  nickName: yup
    .string()
    .matches(
      /^[가-힣a-zA-Z0-9][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
      SCHEMA_MESSAGES.WRONG_NICKNAME_FORMAT,
    )
    .required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  loginId: yup
    .string()
    .matches(
      /^[a-z0-9][^ㄱ-ㅎ가-힣A-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
      SCHEMA_MESSAGES.WRONG_LOGIND_FORMAT,
    )
    .required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  email: yup
    .string()
    .email(SCHEMA_MESSAGES.WRONG_EMAIL_FORMAT)
    .required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  password: yup.string().required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref('password'), null], SCHEMA_MESSAGES.NOT_MATCH_PASSWORD)
    .required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  notiBar: yup.string(),
});

export type LoginSchema = yup.InferType<typeof LOGIN_SCHEMA>;
export type JoinSchema = yup.InferType<typeof JOIN_SCHEMA>;
