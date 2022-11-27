import styled, { css } from 'styled-components';

import { SCREEN_DESKTOP, SCREEN_TABLET } from '@/styles/screen';

export const TabConatiner = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;

  gap: 1rem;
  margin-bottom: 1.5rem;

  justify-content: start;

  ${SCREEN_TABLET} {
    overflow-x: auto;
  }

  ::-webkit-scrollbar {
    height: 4px;
    width: 4px;
    background: gray;
  }
  ::-webkit-scrollbar-thumb:horizontal {
    background-color: red;
    border-radius: 10px;
  }
`;

export const TabButtonContainer = styled.div``;

export const TabButton = styled.button<{ active?: boolean }>`
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
