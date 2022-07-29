import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

export const Forgot = () => {
  const router = useRouter();

  return (
    <ForgotContainer>
      <ForgotPwdText onClick={() => router.push('/auth/find-id')}>
        아이디 찾기
      </ForgotPwdText>
      <ForgotPwdText pwd onClick={() => router.push('/auth/find-password')}>
        비밀번호 찾기
      </ForgotPwdText>
    </ForgotContainer>
  );
};

interface ForgotProps {
  pwd?: boolean;
}

const ForgotContainer = styled.div`
  display: flex;
  justify-content: end;
`;

const ForgotPwdText = styled.em<ForgotProps>`
  display: inline-block;
  position: relative;
  padding-left: 10px;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[500]};
  text-align: right;
  cursor: pointer;
  ${({ pwd }) =>
    pwd &&
    css`
      &::after {
        display: block;
        position: absolute;
        top: 3px;
        left: 5px;
        width: 1px;
        height: 8px;
        background-color: ${({ theme }) => theme.colors.gray[300]};
        content: '';
      }
    `}
`;
