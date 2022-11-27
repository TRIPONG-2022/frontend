import styled, { css } from 'styled-components';

export const MainContainer = styled.div<{ isSearch: boolean }>`
  transition: transform 0.25s ease-in;
  ${({ isSearch }) =>
    isSearch &&
    css`
      transform: translateY(15rem);
      overflow: hidden;
      max-height: calc(100vh - 15rem);
    `}
`;
