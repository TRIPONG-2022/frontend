import React from 'react';
import * as Styled from './Button.styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...buttonProps }: ButtonProps) {
  return (
    <Styled.Button {...buttonProps}>
      <span>{children}</span>
    </Styled.Button>
  );
}
