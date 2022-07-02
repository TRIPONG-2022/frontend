import styled, { css } from 'styled-components';

export const Input = styled.input`
  border: 0;
  margin: 0;
  border-radius: 0.75rem;
  padding: 1.25rem;
  font-size: 1.5rem;

  outline: none;
  ${({ theme }) => css`
    background-color: ${theme.colors.gray[50]};
    &:focus {
      box-shadow: inset 0 0 0 2px ${theme.colors.primary.hex};
    }
    &::placeholder {
      color: ${theme.colors.blackAlpha[400]};
    }
  `}

  @media (min-width: 768px) {
    border-radius: 1rem;
    padding: 1.5rem;
    font-size: 2rem;
  }
`;
