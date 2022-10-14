import styled from 'styled-components';
import { SCREEN_DESKTOP } from '@/styles/screen';

export const ManagedPostListContainer = styled.ul`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 580px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  ${SCREEN_DESKTOP} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1920px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
