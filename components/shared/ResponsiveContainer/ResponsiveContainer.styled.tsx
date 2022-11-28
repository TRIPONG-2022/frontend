import { SCREEN_DESKTOP, SCREEN_TABLET } from '@/styles/screen';
import styled from 'styled-components';

export const ResponsiveContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.25rem;

  ${SCREEN_TABLET} {
    padding: 0 2rem;
  }

  ${SCREEN_DESKTOP} {
    padding: 0 2.5rem;
  }
`;
