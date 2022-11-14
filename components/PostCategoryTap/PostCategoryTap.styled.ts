import styled, { css } from 'styled-components';

import { SCREEN_DESKTOP } from '@/styles/screen';
import { Z_INDEX } from '@/styles/z-index';

export const PostCategoryTapContiner = styled.div<{ scroll: boolean }>`
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;

  margin-bottom: 1.5rem;
  padding: 1rem 0;

  position: sticky;
  top: 0rem;

  overflow-x: auto;
  justify-content: start;

  ${SCREEN_DESKTOP} {
    overflow-x: visible;
  }

  background-color: white;

  ${({ scroll }) =>
    scroll &&
    css`
      transform: translateY(5rem);

      z-index: ${Z_INDEX.STICKY};
    `}

  transition: all 0.5s ease;
  white-space: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Button = styled.button<{ active?: boolean }>`
  flex-shrink: 0;

  padding: 0.875rem 1.125rem;
  border-radius: 2rem;

  font-size: 1rem;
  font-weight: 500;

  border: 1px solid;
  ${({ active, theme: { colors } }) => css`
    border-color: ${active ? colors.primary.hex : colors.gray[300]};
    background-color: ${active
      ? `rgba(${colors.secondary.rgb}, 0.1)`
      : colors.gray[100]};
    color: ${active ? colors.primary.hex : colors.gray[600]};
  `}
`;
