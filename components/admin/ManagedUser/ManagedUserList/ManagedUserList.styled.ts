import styled from 'styled-components';
import { SCREEN_DESKTOP } from '@/styles/screen';

export const ManagedUserListContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  ${SCREEN_DESKTOP} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
