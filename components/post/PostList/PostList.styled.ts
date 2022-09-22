import styled, { css } from 'styled-components';
import { SCREEN_DESKTOP, SCREEN_TABLET } from '@/styles/screen';

const PostListSizeStyles = {
  md: css`
    gap: 1rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    ${SCREEN_DESKTOP} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  `,
  lg: css`
    gap: 1rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    ${SCREEN_TABLET} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    ${SCREEN_DESKTOP} {
      gap: 1.125rem;
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  `,
};

export type PostListSize = keyof typeof PostListSizeStyles;

export const PostListContainer = styled.ul<{
  size: PostListSize;
}>`
  display: grid;

  ${({ size }) => PostListSizeStyles[size]};
`;
