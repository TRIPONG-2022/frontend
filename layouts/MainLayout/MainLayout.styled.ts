import { SCREEN_DESKTOP, SCREEN_TABLET } from '@/styles/screen';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 5rem 0;
  position: relative;

  display: flex;
  justify-content: center;
`;

interface BodyProps {
  fullWidth?: boolean;
}

export const Body = styled.main<BodyProps>`
  width: 100%;
  min-height: 80vh;
  word-break: break-all;
  ${({ fullWidth }) =>
    !fullWidth &&
    css`
      padding: 0 20px;

      ${SCREEN_TABLET} {
        padding: 0 30px;
      }

      ${SCREEN_DESKTOP} {
        max-width: 1280px;
        padding: 0 40px;
      }
    `}
`;

export const Footer = styled.footer`
  width: 100%;
  height: 5rem;
  border-top: 1px solid black;
  position: absolute;
  bottom: 0;
`;
