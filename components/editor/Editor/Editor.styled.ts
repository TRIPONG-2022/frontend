import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1.25rem;
`;

export const DateRangeContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  border-radius: 0.75rem;
  padding: 1.25rem;
  font-size: 1.25rem;

  ${({ theme }) => css`
    label,
    svg {
      color: ${theme.colors.gray[400]};
    }
    background-color: ${theme.colors.gray[50]};
    &:focus-within {
      box-shadow: inset 0 0 0 2px ${theme.colors.primary.hex};
    }
  `}

  @media (min-width: 768px) {
    border-radius: 1rem;
    padding: 1.5rem;
  }

  label {
    font-size: 1.125rem;
    font-weight: 500;
    ${({ theme }) => css`
      color: ${theme.colors.blackAlpha[400]};
    `}
  }
`;
