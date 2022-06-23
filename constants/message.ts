export const SCHEMA_MESSAGES = {
  REQUIRED_FIELD: '필수 입력 정보입니다.',
  NOT_MATCH_PASSWORD: '비밀번호가 일치하지 않습니다.',
  WRONG_EMAIL_FORMAT: '잘못된 이메일 형식입니다.',
  WRONG_NICKNAME_FORMAT: '닉네임에 특수문자가 포함되면 안됩니다!',
  WRONG_LOGINID_FORMAT: '아이디에 특수문자 또는 한글이 포함되면 안됩니다!',
} as const;

type DUPLICATE_MESSAGE_TYPE = {
  [key: string]: string;
  DUPLICATE_NICKNAME: string;
  DUPLICATE_LOGINID: string;
  DUPLICATE_EMAIL: string;
};

export const DUPLICATE_MESSAGES: DUPLICATE_MESSAGE_TYPE = {
  DUPLICATE_NICKNAME: '이미 사용중인 닉네임입니다.',
  DUPLICATE_LOGINID: '이미 사용중인 아이디입니다.',
  DUPLICATE_EMAIL: '이미 사용중인 이메일입니다.',
} as const;
