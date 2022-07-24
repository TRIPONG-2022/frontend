import React, { useEffect, useRef, useState, RefObject } from 'react';
import styled from 'styled-components';
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

        <Styled.Select id={id} {...selectProps} ref={ref}>
          <Styled.Option value="defaultValue"> {defaultLabel} </Styled.Option>

          {options?.map(({ value, label }) => (
            <Styled.Option key={`${id}-${value}`} value={value}>
              {label}
            </Styled.Option>
          ))}
        </Styled.Select>

        <CustomDivContainer
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <div className={`custom-select ${isOpen && 'open'}`}>
            <div className="custom-select__trigger">
              <span>
                {options?.find((item) => item.value === selectedValue)?.label ||
                  'Select'}
              </span>
              <div className="arrow"></div>
            </div>
            <div className="custom-options">
              {options?.map((item) => (
                <div
                  key={item.value}
                  onClick={() => {
                    setselectedValue(item?.value as string);
                    setValue(id, item?.value, {
                      shouldValidate: true,
                      shouldDirty: true,
                    });
                  }}
                  className="option-container"
                >
                  <span
                    className={`custom-option ${
                      selectedValue === item.value && 'selected'
                    } `}
                    data-value={item.value}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CustomDivContainer>
      </Styled.Container>
    );
  },
);

const CustomDivContainer = styled.div`
  position: relative;
  width: 100%;
`;
const CumtomDivTitle = styled.div``;

Select.displayName = 'Select';

export default Select;
