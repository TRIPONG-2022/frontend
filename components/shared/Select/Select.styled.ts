import styled, { css } from 'styled-components';

interface InputProps {
  error?: boolean;
}

interface OptionProps {
  isOpen: boolean;
}

export const baseInput = css<InputProps>`
  padding: 7px 32px 7px 12px;
  border-radius: 8px;
  width: 100%;
  color: ${(props) => props.theme.colors.gray[400]};
  outline: none;
`;

export const Container = styled.div`
  margin-bottom: 1.5rem;
  flex-basis: 100%;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  display: block;

  width: 100%;
  height: 1rem;

  font-size: 0.875rem;
  font-weight: bold;
`;

export const CustomDivContainer = styled.button`
  position: relative;
  width: 100%;
`;
export const CustomDivTitle = styled.div`
  padding: 1rem 1.25rem;
  width: 100%;
  border: 1px solid #e8eaed;
  border-radius: 1rem;
  background: white;
  box-shadow: 0 1px 3px -2px #9098a9;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: 0.75rem;
  font-weight: bold;
  position: relative;
  text-align: center;
`;

const Arrow = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  right: 0;
  top: 0;
  transform: translate(0, +50%);
  background-color: black;
`;

export const CustomUl = styled.ul<OptionProps>`
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
  border: 1px solid #e8eaed;
  border-radius: 1rem;
  max-height: 200px;
  overflow-y: auto;

  ${({ isOpen }) =>
    isOpen
      ? css`
          opacity: 1;
          visibility: visible;
          pointer-events: all;
          margin-top: 8px;
          box-shadow: -1px 1px 2px rgba(67, 70, 74, 0.0001),
            -2px 2px 5px rgba(67, 86, 100, 0.123689);
          border-radius: 8px;
        `
      : null}
  text-align: center;
`;

export const CustomLi = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0.5rem;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.gray[400]};

  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    background-color: rgba(${({ theme }) => theme.colors.primary.rgb}, 0.4);
  }
`;

export const ErrorMessage = styled.p``;
