import styled from 'styled-components';

export const SignUpContainer = styled.p`
  text-align: center;
  margin: 3rem 0;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const SingUpBtn = styled.a`
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors.primary.hex};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
