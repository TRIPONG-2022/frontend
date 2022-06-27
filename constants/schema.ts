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
  gender: yup.string().required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  // gender는 없어도 될 것 같기도하고..
  year: yup.number().required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  month: yup.number().required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  day: yup.number().required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  fistAddress: yup.string().required(SCHEMA_MESSAGES.REQUIRED_FIELD),
  secondAddress: yup.string().required(SCHEMA_MESSAGES.REQUIRED_FIELD),
});

export type InformationScheme = yup.InferType<typeof ADD_INFORMATION_SCHEMA>;

export type LoginSchema = yup.InferType<typeof LOGIN_SCHEMA>;
