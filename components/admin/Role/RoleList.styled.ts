import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  margin-top: 4rem;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;
