import React, { useEffect, useRef, useState, RefObject } from 'react';
import styled, { css } from 'styled-components';
import * as Styled from './Select.styled';
import { UseFormSetValue, UseFormReturn } from 'react-hook-form';

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

    // 바깥 부분 클릭시

    const selectRef = useRef<HTMLButtonElement>(null);
    const outSideClick = (event: MouseEvent) => {
      if (
        !selectRef.current ||
        selectRef.current.contains(event?.target as Node)
      )
        return;
      setOpen(false);
    };

    useEffect(() => {
      document.addEventListener('click', outSideClick);
      return () => document.removeEventListener('click', outSideClick);
    });

    return (
      <Styled.Container>
        {label && <Styled.Label htmlFor={id}>{label}</Styled.Label>}

        <Styled.CustomDivContainer
          type="button"
          ref={selectRef}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <Styled.CustomDivTitle>
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
  },
);

Select.displayName = 'Select';

export default Select;
