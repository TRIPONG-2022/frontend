import React, { useState } from 'react';
import SVGIcon from '../SVGIcon';
import * as Styled from './Select.styled';

interface SelectOption {
  value: string | number;
  label: string | number;
}

interface SelectProps {
  label?: string;
  id: string;
  errorMessage?: string;
  defaultLabel: string;
  options?: SelectOption[];
  onChangeOption: (value: string | number) => void;
}

const Select = ({
  label,
  id,
  options,
  defaultLabel,
  onChangeOption,
}: SelectProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null,
  );

  const handleClick = (option: SelectOption) => {
    setSelectedOption(option);
    onChangeOption(option.value);
  };

  return (
    <Styled.Container>
      <Styled.Label htmlFor={id}>{label}</Styled.Label>
      {isOpen && (
        <Styled.Backdrop
          onClick={() => {
            setOpen(false);
          }}
        />
      )}
      <Styled.OptionContainer
        type="button"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <Styled.OptionTitle isOpen={isOpen}>
          {selectedOption === null ? defaultLabel : selectedOption.label}
          <SVGIcon icon="ChevronDownIcon" size={16} />
        </Styled.OptionTitle>
        <Styled.OptionList isOpen={isOpen}>
          {options?.map((option) => (
            <Styled.OptionItem
              key={option.value}
              onClick={() => {
                handleClick(option);
              }}
            >
              <span>{option.label}</span>
            </Styled.OptionItem>
          ))}
        </Styled.OptionList>
      </Styled.OptionContainer>
    </Styled.Container>
  );
};

export default Select;
