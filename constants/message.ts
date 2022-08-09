export const SCHEMA_MESSAGES = {
  REQUIRED_FIELD: '필수 입력 정보입니다.',
  NAME_FORMAT: '이름을 적어주세요',
  NOT_MATCH_PASSWORD: '비밀번호가 일치하지 않습니다.',
  WRONG_EMAIL_FORMAT: '잘못된 이메일 형식입니다.',
  WRONG_NICKNAME_FORMAT: '닉네임에 특수문자가 포함되면 안됩니다!',
  WRONG_LOGINID_FORMAT: '아이디에 특수문자 또는 한글이 포함되면 안됩니다!',
} as const;

type DuplicateMessageType = {
  [key: string]: string;
};

export const DUPLICATE_MESSAGES: DuplicateMessageType = {
  DUPLICATE_NICKNAME: '이미 사용중인 닉네임입니다.',
  DUPLICATE_LOGINID: '이미 사용중인 아이디입니다.',
  DUPLICATE_EMAIL: '이미 사용중인 이메일입니다.',
} as const;
