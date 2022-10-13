import styled, { css } from 'styled-components';

import { SCREEN_DESKTOP } from '@/styles/screen';

interface LoginJoinLiType {
  divide: 'GNB' | 'Navi';
}

export const LoginJoinLi = styled.li<LoginJoinLiType>`
  ${({ divide }) =>
    divide === 'GNB'
      ? css`
          display: none;
          margin-left: 1.5vw;
          font-size: 0.825rem;
          cursor: pointer;

          ${SCREEN_DESKTOP} {
            display: flex;
          }
        `
      : css`
          margin-top: 2rem;
          font-size: 2rem;
          font-weight: bold;
          cursor: pointer;
        `}
`;
