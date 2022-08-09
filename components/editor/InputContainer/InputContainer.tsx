import React from 'react';
import * as Styled from './InputContainer.styled';

interface InputContainerProps {
  children?: React.ReactNode;
}

export default function InputContainer({ children }: InputContainerProps) {
  return <Styled.Container>{children}</Styled.Container>;
}
