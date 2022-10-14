import styled from 'styled-components';

export const ManagedUserSearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
`;

export const SelectWrapper = styled.div`
  min-width: 10rem;
`;

export const SearchInput = styled.input`
  border: 2px solid;
  border-radius: 1rem;
  padding: 1.25rem;

  font-size: 1rem;
  color: #000000;
`;

export const SearchButton = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 1rem;

  background-color: rgba(${({ theme }) => theme.colors.primary.rgb}, 0.4);
`;
