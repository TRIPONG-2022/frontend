import Link from 'next/link';
import * as Styled from './SignUpArea.styled';

const SignUpArea = () => {
  return (
    <Styled.SignUpContainer>
      계정이 없으신가요?
      <Link href={'/auth/join'}>
        <Styled.SingUpBtn>회원가입</Styled.SingUpBtn>
      </Link>
    </Styled.SignUpContainer>
  );
};

export default SignUpArea;
