import styled, { css, CSSProp, DefaultTheme } from 'styled-components';

const ButtonSizeStyles = {
  md: css`
    padding: 0.875rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
  `,
  lg: css`
    padding: 1.25rem;
    border-radius: 1rem;
    font-size: 1rem;
  `,
};

const ButtonVariantStyles = {
  primary: css`
    color: #ffffff;
    background-color: #0dc5d6;
  `,
  outline: css`
    color: #0dc5d6;
    background-color: transparent;
    box-shadow: inset 0 0 0 2px #0dc5d6;
  `,
};

export type ButtonSize = keyof typeof ButtonSizeStyles;
export type ButtonVariant = keyof typeof ButtonVariantStyles;

interface BaseButtonProps {
  $size: ButtonSize;
  $variant: ButtonVariant;
  $css?: CSSProp<DefaultTheme>;
}

export const BaseButton = styled.button<BaseButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;

  &:hover {
    opacity: 0.75;
  }

  &:disabled {
    opacity: 0.25;
    pointer-events: none;
  }

  ${({ $size, $variant, $css }) => css`
    ${ButtonSizeStyles[$size]}
    ${ButtonVariantStyles[$variant]}
    ${$css}
  `}
`;
