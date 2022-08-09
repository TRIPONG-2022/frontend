import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 0.75rem;
  padding: 1.25rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray[50]};
    &:focus-within {
      box-shadow: inset 0 0 0 2px ${theme.colors.primary.hex};
    }
  `}

  @media (min-width: 768px) {
    border-radius: 1rem;
    padding: 1.5rem;
  }
`;
