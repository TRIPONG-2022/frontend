import styled, { css } from 'styled-components';

export const MainContainer = styled.main<{ isSearch: boolean }>`
  ${({ isSearch }) =>
    isSearch &&
    css`
      transform: translateY(10rem);
      overflow: hidden;
    `}
`;
