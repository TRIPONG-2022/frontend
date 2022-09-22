import React, { useState, useEffect, useMemo } from 'react';
import SVGIcon from '../SVGIcon';
import * as Styled from './Select.styled';

export interface SelectOption<T> {
  value: T;
  label: string;
}

interface SelectProps<T> {
  id: string;
  label?: string;
  disabled?: boolean;
  defaultLabel: string;
  options?: SelectOption<T>[];
  selectedValue?: T;
  onChangeOption: (value: T) => void;
}

export default function Select<T>({
  label,
  id,
  disabled,
  options,
  defaultLabel,
  selectedValue,
  onChangeOption,
}: SelectProps<T>) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const selectedLabel = useMemo(() => {
    const selectedOption = options?.find(
      ({ value }) => value === selectedValue,
    );
    return selectedOption ? selectedOption.label : defaultLabel;
  }, [options, selectedValue, defaultLabel]);

  const handleClick = (option: SelectOption<T>) => {
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
        disabled={disabled}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <Styled.OptionTitle isOpen={isOpen} selected={Boolean(selectedValue)}>
          {selectedLabel}
          <SVGIcon icon="ChevronDownIcon" size={16} />
        </Styled.OptionTitle>
        <Styled.OptionList isOpen={isOpen}>
          {options?.map((option) => (
            <Styled.OptionItem
              key={option.label}
              selected={selectedValue === option.value}
              onClick={() => {
                handleClick(option);
              }}
            >
              {selectedValue === option.value && (
                <SVGIcon icon="CheckIcon" size={16} />
              )}
              <span>{option.label}</span>
            </Styled.OptionItem>
          ))}
        </Styled.OptionList>
      </Styled.OptionContainer>
    </Styled.Container>
  );
}
