import React, { useState, useEffect } from 'react';
import SVGIcon from '../SVGIcon';
import * as Styled from './Select.styled';

export interface SelectOption<T> {
  value: T;
  label: string;
}

interface SelectProps<T> {
  label?: string;
  id: string;
  disabled?: boolean;
  defaultLabel: string;
  options?: SelectOption<T>[];
  onChangeOption: (value: T) => void;
}

export default function Select<T>({
  label,
  id,
  disabled,
  options,
  defaultLabel,
  onChangeOption,
}: SelectProps<T>) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption<T> | null>(
    null,
  );

  const handleClick = (option: SelectOption<T>) => {
    setSelectedOption(option);
    onChangeOption(option.value);
  };

  useEffect(() => {
    if (!selectedOption || !options) return;
    const isOptionExist = options.some(
      ({ value }) => value === selectedOption.value,
    );
    if (!isOptionExist) {
      setSelectedOption(null);
    }
  }, [options, selectedOption]);

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
        <Styled.OptionTitle isOpen={isOpen} selected={Boolean(selectedOption)}>
          {selectedOption === null ? defaultLabel : selectedOption.label}
          <SVGIcon icon="ChevronDownIcon" size={16} />
        </Styled.OptionTitle>
        <Styled.OptionList isOpen={isOpen}>
          {options?.map((option) => (
            <Styled.OptionItem
              key={option.label}
              selected={selectedOption?.value === option.value}
              onClick={() => {
                handleClick(option);
              }}
            >
              {selectedOption?.value === option.value && (
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
