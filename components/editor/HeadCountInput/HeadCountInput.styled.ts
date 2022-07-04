import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

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

export const Label = styled.label`
  font-size: 1.125rem;
  font-weight: 500;
  margin-right: 1rem;
  ${({ theme }) => css`
    color: ${theme.colors.blackAlpha[400]};
  `}
`;

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.25rem;

  padding: 0.25rem;
  border-radius: 0.5rem;
  ${({ theme }) => css`
    background-color: rgba(${theme.colors.secondary.rgb}, 0.1);
  `}
`;

export const CountButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 0.25rem;

  ${({ theme }) => css`
    color: ${theme.colors.primary.hex};
    &:hover {
      color: #ffffff;
      background-color: rgba(${theme.colors.secondary.rgb}, 0.5);
    }
  `}
`;

export const CountInput = styled.p`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.25rem;

  font-size: 1.125rem;
  font-weight: 500;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.primary.hex};
    background-color: #ffffff;
    border: 1px solid ${theme.colors.secondary.hex};
  `}

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
