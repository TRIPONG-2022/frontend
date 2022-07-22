import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 0 0.5rem;
`;

export const Button = styled.button`
  display: flex;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.primary.hex};
  border-radius: 0.5rem;
  color: white;

  svg {
    margin-left: 0.5rem;
  }
`;

interface DatePickerDivProps {
  active: boolean;
}

export const DatePickerDiv = styled.div<DatePickerDivProps>`
  position: absolute;
  display: none;
  z-index: 500;
  ${({ active }) =>
    active &&
    css`
      display: block;
    `}
`;
