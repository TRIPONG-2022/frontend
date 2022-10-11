import styled from 'styled-components';

export const ManagedPostListContainer = styled.ul`
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem;
`;
