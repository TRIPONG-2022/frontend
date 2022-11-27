import styled, { css } from 'styled-components';

import { SCREEN_DESKTOP, SCREEN_TABLET } from '@/styles/screen';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 5rem 0;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface BodyProps {
  fullWidth?: boolean;
  isSearch: boolean;
}

export const Body = styled.main<BodyProps>`
  width: 100%;
  max-width: 1280px;
  word-break: break-all;
  transition: all 0.2s ease;

  ${({ fullWidth }) =>
    !fullWidth &&
    css`
      padding: 0 20px;

      ${SCREEN_TABLET} {
        padding: 0 30px;
      }

      ${SCREEN_DESKTOP} {
        padding: 0 40px;
      }
    `}

  ${({ isSearch }) =>
    isSearch &&
    css`
      transform: translateY(10rem);
      overflow: hidden;
      height: calc(100vh - 15rem);
    `}
`;

export const Footer = styled.footer`
  width: 100%;
  border-top: 1px solid black;
`;
