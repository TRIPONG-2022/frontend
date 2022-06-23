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
  width: 100%;
  border: 2px solid;
  border-color: ${({ $invalid }) => ($invalid ? 'red' : 'transparent')};
  border-radius: 1rem;
  padding: 1.25rem;

  font-size: 1rem;
  color: #000000;
  background-color: transparent;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: ${({ $invalid }) => ($invalid ? 'red' : '#0dc5d6')};
  }

  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: red;
`;
