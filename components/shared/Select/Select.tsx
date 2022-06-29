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
        {/* selectprops 뒤에 onChange 넣으니 동작안했음 */}
        <Styled.Select {...selectProps} ref={ref}>
          <Styled.Option value="defaultValue"> {defaultLabel} </Styled.Option>

          {options?.map(({ value, label }) => (
            <Styled.Option key={`${id}-${value}`} value={value}>
              {typeof label == 'string' && label.split(' ')[1]
                ? label.split(' ')[1]
                : label}
            </Styled.Option>
          ))}
        </Styled.Select>
      </Styled.Container>
    );
  },
);

Select.displayName = 'Select';

export default Select;

// react hook form에서 자체적으로 register가 ref 에 담겨서 들어오는걸 써보니깐 이해함;
// Select를 컴포넌트로 몰면서 느낀 에로사항
// 각자 option에 attribute들이 다양하게 달라가지고 option은 children이 답인 듯?!...
// 스타일을 위해 약간 억지 재활용도 존재하긴 함
// 넣는 type또한 리팩토링 되도록 해야함

// 지금 map {value,label} 이므로 options를 그에 맞게 가공해줘야함
