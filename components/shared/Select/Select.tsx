import React, { useEffect, useRef, useState, RefObject } from 'react';
import styled, { css } from 'styled-components';
import * as Styled from './Select.styled';
import { UseFormSetValue, UseFormReturn } from 'react-hook-form';

interface SelectOption {
  value: string | number;
  label: string | number;
}
interface SelectProps {
  label?: string;
  id: string;
  errorMessage?: string;
  defaultLabel?: string;
  options?: SelectOption[];
  onClickOption?: any;
}

const Select = ({
  label,
  id,
  options,
  defaultLabel,
  onClickOption,
}: SelectProps) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setselectedValue] = useState(defaultLabel);

  return (
    <Styled.Container>
      <Styled.Label htmlFor={id}>{label}</Styled.Label>

      <Styled.CustomDivContainer
        type="button"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <Styled.CustomDivTitle isOpen={isOpen}>
          {options?.find((item) => item.value === selectedValue)?.label ||
            defaultLabel}

          {/* <Arrow /> */}
        </Styled.CustomDivTitle>

        <Styled.CustomUl isOpen={isOpen}>
          {options?.map((item) => (
            <Styled.CustomLi
              key={item.value}
              onClick={() => {
                setselectedValue(item?.value as string);
                onClickOption({ id, value: item?.value });
              }}
            >
              <span data-value={item.value}>{item.label}</span>
            </Styled.CustomLi>
          ))}
        </Styled.CustomUl>
      </Styled.CustomDivContainer>
      {isOpen && (
        <Styled.Back
          onClick={() => {
            setOpen(false);
          }}
        />
      )}
    </Styled.Container>
  );
};
Select.displayName = 'Select';

export default Select;
