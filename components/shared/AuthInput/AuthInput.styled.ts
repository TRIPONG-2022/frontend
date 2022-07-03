import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  display: block;

  font-size: 0.875rem;
  font-weight: bold;
`;

export const Input = styled.input<{ $invalid?: boolean }>`
  ${({ theme, $invalid }) => css`
    width: 100%;
    border: 2px solid;
    border-color: ${$invalid ? theme.colors.error.hex : 'transparent'};
    border-radius: 1rem;
    padding: 1.25rem;

    font-size: 1rem;
    color: #000000;
    background-color: ${theme.colors.gray[50]};

    &:focus {
      outline: none;
      border-color: ${$invalid
        ? theme.colors.error.hex
        : theme.colors.primary.hex};
    }

    ::placeholder {
      color: ${theme.colors.blackAlpha[400]};
    }
  `};
`;

export const ErrorMessage = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: red;
`;
