import styled from 'styled-components';
import { markdownStyles } from '@/styles/markdown';
import { SCREEN_TABLET } from '@/styles/screen';

export const PostBodyContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding-bottom: 5rem;
`;

export const PostContent = styled.div`
  ${markdownStyles}
`;

export const PostTagListWrapper = styled.div`
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

export const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

export const GatheringContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  margin-bottom: 1.5rem;
  border-radius: 0.75rem;
  padding: 1.75rem;
  font-size: 1.125rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  background-color: ${({ theme }) => theme.colors.gray[50]};
`;

export const GatheringInfo = styled.p`
  strong {
    font-weight: 700;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.gray[800]};
  }
  span {
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`;
