import styled from 'styled-components';

export const Continer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  padding: 5rem;
  justify-content: center;
`;

export const Button = styled.button<{ active?: boolean }>`
  padding: 1rem;
  border-radius: 2rem;

  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary.hex};
  background-color: ${({ active, theme }) =>
    active ? 'white' : theme.colors.primary.hex};
  color: ${({ active }) => (active ? '#444' : 'white')};

  font-size: 1rem;
  font-weight: 600;
`;
