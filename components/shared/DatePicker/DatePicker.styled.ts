import styled, { css } from 'styled-components';

export const DatePickerHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.5rem;
`;

export const DatePickerHeaderCurrentDate = styled.strong`
  font-size: 0.875rem;
  font-weight: 500;
`;

export const DatePickerHeaderUtilButton = styled.button`
  padding: 0.25rem;

  ${({ theme }) => css`
    color: ${theme.colors.gray[400]};
  `}
`;

export const DatePickerInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 0.5rem;

  ${({ theme }) => css`
    color: ${theme.colors.primary.hex};
    background-color: rgba(${theme.colors.secondary.rgb}, 0.1);
  `}

  svg {
    position: absolute;
    left: 1rem;
  }
`;

export const DatePickerInput = styled.input`
  width: 100%;
  display: flex;
  padding: 0.25rem;

  background: none;
  border: 0;
  margin: 0;
  outline: none;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  height: 2.5rem;
  ${({ theme }) => css`
    color: ${theme.colors.primary.hex};
  `}
`;

export const Container = styled.div`
  .react-datepicker {
    display: flex;
    flex-direction: column;
    width: 15rem;
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    color: #000000;
    background-color: #ffffff;
    filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
      drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  }

  .react-datepicker__current-month {
    text-align: center;
  }

  .react-datepicker__day-names,
  .react-datepicker__week {
    display: flex;
    column-gap: 0.125rem;
    margin-bottom: 0.25rem;
  }

  .react-datepicker__day-name,
  .react-datepicker__day {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-size: 0.875rem;
    aspect-ratio: 1 / 1;
    cursor: pointer;
    border-radius: 0.375rem;
    &:hover {
      background-color: rgba(${({ theme }) => theme.colors.secondary.rgb}, 0.2);
    }
  }

  .react-datepicker__day--outside-month,
  .react-datepicker__day--disabled {
    color: ${({ theme }) => theme.colors.blackAlpha[200]};
  }

  .react-datepicker__day--in-range {
    color: #ffffff;
    background-color: ${({ theme }) =>
      `rgba(${theme.colors.primary.rgb}, 0.25)`};
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--selecting-range-start,
  .react-datepicker__day--selecting-range-end {
    color: #ffffff;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.primary.hex};
  }
`;
