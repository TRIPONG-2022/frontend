import styled from 'styled-components';
import { SCREEN_TABLET, SCREEN_DESKTOP } from '@/styles/screen';

export const RoleListContainer = styled.div`
  width: 100%;

  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  margin-top: 4rem;

  ${SCREEN_DESKTOP} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
