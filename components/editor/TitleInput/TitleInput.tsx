import React from 'react';
import * as Styled from './TitleInput.styled';

interface TitleInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const TitleInput = React.forwardRef<HTMLInputElement, TitleInputProps>(
  ({ ...inputProps }, ref) => {
    return <Styled.Input {...inputProps} ref={ref} />;
  },
);

TitleInput.displayName = 'EditorTitleInput';

export default TitleInput;
