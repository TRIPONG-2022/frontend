import { SCREEN_DESKTOP, SCREEN_TABLET } from '@/styles/screen';
import styled from 'styled-components';

export const PostListSectionContainer = styled.section`
  margin-top: 4rem;
  margin-bottom: 2rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  ${SCREEN_TABLET} {
    margin-bottom: 1.5rem;
  }

  & > h2 {
    font-size: 1.25rem;
    font-weight: 700;
    ${SCREEN_TABLET} {
      font-size: 1.5rem;
    }
  }
  & > a {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[500]};
    &:hover {
      text-decoration: underline;
    }

    ${SCREEN_TABLET} {
      font-size: 1rem;
    }
  }
`;
