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

export const Body = styled.div<BodyProps>`
  width: 100%;
  word-break: break-all;
  min-height: 80vh;
  ${({ fullWidth }) =>
    !fullWidth &&
    css`
      max-width: 768px;
      padding: 0 32px;

      @media (min-width: 768px) {
        max-width: 1280px;
        padding: 0 40px;
      }
    `}
`;

export const Footer = styled.div`
  width: 100%;
  height: 5rem;
  border-top: 1px solid black;
  position: absolute;
  bottom: 0;
`;
