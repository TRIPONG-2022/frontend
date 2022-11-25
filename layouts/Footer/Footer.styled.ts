import styled, { css } from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  margin-top: 5rem;
  padding: 3rem 0;
  ${({ theme }) => css`
    color: ${theme.colors.gray[600]};
    background-color: ${theme.colors.gray[100]};
    border-top: 1px solid ${theme.colors.gray[300]};
  `};
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > p {
    margin-top: 1.5rem;
    font-size: 0.75rem;
  }
`;
