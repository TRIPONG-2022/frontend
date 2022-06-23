import React from 'react';
import { CSSProp, DefaultTheme } from 'styled-components';
import * as Styled from './Button.styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  css?: CSSProp<DefaultTheme>;
  size?: Styled.ButtonSize;
  variant?: Styled.ButtonVariant;
}

export default function Button({
  css,
  children,
  size = 'md',
  variant = 'primary',
  ...buttonProps
}: ButtonProps) {
  return (
    <Styled.BaseButton
      $css={css}
      $size={size}
      $variant={variant}
      {...buttonProps}
    >
      <span>{children}</span>
    </Styled.BaseButton>
  );
}
