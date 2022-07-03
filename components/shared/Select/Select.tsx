import React from 'react';
import * as Styled from './Select.styled';

interface SelectOption {
  value: string | number;
  label: string | number;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  errorMessage?: string;
  defaultLabel?: string;
  options?: SelectOption[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, id, options, defaultLabel, ...selectProps }, ref) => {
    return (
      <Styled.Container>
        {label && <Styled.Label htmlFor={id}>{label}</Styled.Label>}

        <Styled.Select {...selectProps} ref={ref}>
          <Styled.Option value="defaultValue"> {defaultLabel} </Styled.Option>

          {options?.map(({ value, label }) => (
            <Styled.Option key={`${id}-${value}`} value={value}>
              {label}
            </Styled.Option>
          ))}
        </Styled.Select>
      </Styled.Container>
    );
  },
);

Select.displayName = 'Select';

export default Select;
