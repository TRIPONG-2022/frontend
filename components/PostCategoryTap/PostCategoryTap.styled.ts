import { SCREEN_DESKTOP } from '@/styles/screen';
import styled, { css } from 'styled-components';

export const PostCategoryTapContiner = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;

  gap: 1rem;
  margin-bottom: 1.5rem;

  justify-content: start;

  ${SCREEN_DESKTOP} {
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
