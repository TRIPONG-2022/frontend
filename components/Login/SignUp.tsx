import { useRouter } from 'next/router';
import styled from 'styled-components';

export const SignUp = () => {
  const router = useRouter();
  return (
    <SignUpContainer>
      계정이 없으신가요?
      <SingUpBtn onClick={() => router.push('/auth/join')}>회원가입</SingUpBtn>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.p`
  text-align: center;
  margin: 3rem 0;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

const SingUpBtn = styled.em`
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors.primary.hex};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
