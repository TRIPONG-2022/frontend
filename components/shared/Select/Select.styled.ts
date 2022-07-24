import styled, { css } from 'styled-components';

type InputProps = {
  error?: boolean;
};

export const baseInput = css<InputProps>`
  padding: 7px 32px 7px 12px;
  border-radius: 8px;
  width: 100%;
  color: ${(props) => props.theme.colors.gray[400]};

  outline: none;
`;

export const Container = styled.div`
  select {
    display: none;
  }
  .custom-select-wrapper {
    position: relative;
    /* user-select: none; */
    width: 80%;
  }
  .custom-select {
    ${baseInput}
    padding-right: 8px;
    background: white;
    position: relative;
    cursor: pointer;
    color: ${(props) => props.theme.colors.gray[400]};
  }
  .custom-select__trigger {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  .custom-options {
    position: absolute;
    display: block;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    transition: all 0.5s;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: 2;
    padding: 8px;
    max-height: 200px;
    overflow-y: auto;
  }
  .custom-select.open .custom-options {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
    margin-top: 8px;
    box-shadow: -1px 1px 2px rgba(67, 70, 74, 0.0001),
      -2px 2px 5px rgba(67, 86, 100, 0.123689);
    border-radius: 8px;
  }
  .custom-option {
    position: relative;
    display: block;
    padding: 5px 8px;
    cursor: pointer;
    transition: all 0.5s;
    border-radius: 6px;
    color: ${(props) => props.theme.colors.gray[400]};

    margin-bottom: 12px;
    height: 32px;
  }

  .option-container {
    border: solid white 0.1px;
  }

  .option-container:hover {
    .custom-option {
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.primary.hex};
    }
  }

  .custom-option.selected {
    color: ${(props) => props.theme.colors.gray[400]};
    background-color: ${(props) => props.theme.colors.primary.hex};
  }

  .arrow {
    position: relative;
    height: 7.72px;
    width: 12.26px;
  }
  .arrow::before,
  .arrow::after {
    content: '';
    position: absolute;
    bottom: 0px;
    width: 0.15rem;
    height: 100%;
    transition: all 0.5s;
  }
  .arrow::before {
    left: -2px;
    transform: rotate(-45deg);
    background-color: ${(props) => props.theme.colors.gray[400]};
  }
  .arrow::after {
    left: 2px;
    transform: rotate(45deg);
    background-color: ${(props) => props.theme.colors.gray[400]};
  }
  .open .arrow::before {
    left: -2px;
    transform: rotate(45deg);
  }
  .open .arrow::after {
    left: 2px;
    transform: rotate(-45deg);
  }
`;

export const Label = styled.label``;

export const Select = styled.select``;

export const Option = styled.option``;

export const ErrorMessage = styled.p``;
