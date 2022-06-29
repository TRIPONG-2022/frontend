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

export type InformationScheme = yup.InferType<typeof ADD_INFORMATION_SCHEMA>;

export type LoginSchema = yup.InferType<typeof LOGIN_SCHEMA>;
