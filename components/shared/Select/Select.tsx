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
  setValue: any;
  options?: SelectOption[];
}

const Select = ({
  label,
  id,
  options,
  defaultLabel,
  setValue,
}: SelectProps) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setselectedValue] = useState(defaultLabel);

  // 바깥 부분 클릭시 code
  const selectRef = useRef<HTMLButtonElement>(null);
  const outSideClick = (event: MouseEvent) => {
    if (!selectRef.current || selectRef.current.contains(event?.target as Node))
      return;
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', outSideClick);
    return () => document.removeEventListener('click', outSideClick);
  });

  return (
    <Styled.Container>
      <Styled.Label htmlFor={id}>{label}</Styled.Label>

      <Styled.CustomDivContainer
        type="button"
        ref={selectRef}
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
                setValue(id, item?.value, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
            >
              <span data-value={item.value}>{item.label}</span>
            </Styled.CustomLi>
          ))}
        </Styled.CustomUl>
      </Styled.CustomDivContainer>
    </Styled.Container>
  );
};
Select.displayName = 'Select';

export default Select;
