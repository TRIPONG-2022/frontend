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

export const REPASSWORD_SCHEMA = yup.object({
  password: yup.string().required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref('password'), null], SCHEMA_MESSAGES.NOT_MATCH_PASSWORD)
    .required(SCHEMA_MESSAGES.REQUIRED_FIELD),
});

export type LoginSchema = yup.InferType<typeof LOGIN_SCHEMA>;
export type RepasswordSchema = yup.InferType<typeof REPASSWORD_SCHEMA>;
