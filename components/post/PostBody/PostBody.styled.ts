import styled from 'styled-components';
import { markdownStyles } from '@/styles/markdown';
import { SCREEN_TABLET } from '@/styles/screen';

export const PostBodyContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

export const PostContent = styled.div`
  ${markdownStyles}
`;

export const PostTagListContainer = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const PostTagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.5rem;
`;

export const PostTagItem = styled.li`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary.hex};
  cursor: pointer;

  ${SCREEN_TABLET} {
    font-size: 1rem;
  }

  &::before {
    content: '#';
    margin-right: 0.125rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;
