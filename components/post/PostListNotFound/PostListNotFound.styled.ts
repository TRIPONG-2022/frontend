import styled from 'styled-components';

import { SCREEN_TABLET } from '@/styles/screen';

export const PostListNotFoundContainer = styled.div`
  margin: 0 auto;
  padding: 6rem 0;
  text-align: center;

  ${SCREEN_TABLET} {
    padding: 10rem 0;
  }

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    ${SCREEN_TABLET} {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }
`;
