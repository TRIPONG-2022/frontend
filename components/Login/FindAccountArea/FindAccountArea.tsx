import Link from 'next/link';
import * as Styled from './FindAccountArea.styled';

const FindAccountArea = () => {
  return (
    <Styled.FindAccountConatiner>
      <Link href={'/auth/find-id'}>
        <Styled.FindAccountText>아이디 찾기</Styled.FindAccountText>
      </Link>
      <Link href={'/auth/find-password'}>
        <Styled.FindAccountText>비밀번호 찾기</Styled.FindAccountText>
      </Link>
    </Styled.FindAccountConatiner>
  );
};

export default FindAccountArea;
