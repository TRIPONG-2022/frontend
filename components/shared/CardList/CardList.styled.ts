import styled, { css } from 'styled-components';
import { SCREEN_TABLET, SCREEN_DESKTOP } from '@/styles/screen';

interface CardContainerProps {
  $columnNumber: number;
}

export const CardListContainer = styled.div<CardContainerProps>`
  width: 100%;
  display: grid;
  gap: 1rem;
  ${({ $columnNumber }) => css`
    grid-template-columns: repeat(
      ${$columnNumber},
      minmax(0, ${$columnNumber}fr)
    );
  `}
`;
