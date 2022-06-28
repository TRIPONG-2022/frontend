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

export type LoginSchema = yup.InferType<typeof LOGIN_SCHEMA>;

export const SEND_EMAIL_SCHEMA = yup.object({
  email: EMAIL_SCHEMA,
});

export type SendEmailSchema = yup.InferType<typeof SEND_EMAIL_SCHEMA>;
