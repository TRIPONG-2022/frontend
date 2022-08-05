import React, { useEffect, useRef, useState, RefObject } from 'react';
import styled, { css } from 'styled-components';
import * as Styled from './Select.styled';

interface SelectOption {
  value: string | number;
  label: string | number;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  errorMessage?: string;
  defaultLabel?: string;
  setValue: any;
  options?: SelectOption[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, id, options, defaultLabel, setValue, ...selectProps }, ref) => {
    const [isOpen, setOpen] = useState(false);
    const [selectedValue, setselectedValue] = useState(defaultLabel);

    useEffect(() => {
      // 이렇게 사용한 이유는 이미 select에서 ref를 사용 중이라 이렇게 tag를 가져옴
      const selectTag = document.getElementById(id as string);

      if (selectTag) {
        (selectTag as HTMLInputElement).value = selectedValue as string;
      }
    }, [selectedValue]);

    return (
      <Styled.Container>
        {label && <Styled.Label htmlFor={id}>{label}</Styled.Label>}

        <Styled.Select id={id} {...selectProps} ref={ref}></Styled.Select>

        <CustomDivContainer
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <CustomDivTitle>
            {options?.find((item) => item.value === selectedValue)?.label ||
              defaultLabel}

            {/* <Arrow /> */}
          </CustomDivTitle>
          <CustomOption isOpen={isOpen}>
            {options?.map((item) => (
              <CustomSpan
                key={item.value}
                onClick={() => {
                  setselectedValue(item?.value as string);
                  setValue(id, item?.value, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }}
              >
                <span data-value={item.value}>{item.label}</span>
              </CustomSpan>
            ))}
          </CustomOption>
        </CustomDivContainer>
      </Styled.Container>
    );
  },
);

interface OptionProps {
  isOpen: boolean;
}

const CustomDivContainer = styled.div`
  position: relative;
  width: 100%;
`;
const CustomDivTitle = styled.div`
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

const CustomOption = styled.div<OptionProps>`
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
  border: 2px solid black;
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
`;

const CustomSpan = styled.div`
  position: relative;
  display: block;
  padding: 5px 8px;
  cursor: pointer;
  transition: all 0.5s;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.gray[400]};

  margin-bottom: 12px;
  height: 32px;
`;

Select.displayName = 'Select';

export default Select;
