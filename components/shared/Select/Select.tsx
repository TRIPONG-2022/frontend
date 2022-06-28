import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  errorMessage?: string;
  change?: any;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, id, children, change, ...selectProps }, ref) => {
    return (
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        {/* selectprops 뒤에 onChange 넣으니 동작안했음 */}
        <select
          {...selectProps}
          {...(change && { onChange: change })}
          ref={ref}
        >
          {children}
        </select>
      </div>
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
