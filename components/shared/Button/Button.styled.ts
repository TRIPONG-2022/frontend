import styled, { css, CSSProp, DefaultTheme } from 'styled-components';

const ButtonSizeStyles = {
  sm: css`
    padding: 0.625rem 0.75rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
  `,
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
    background-color: ${({ theme }) => theme.colors.primary.hex};
  `,
  outline: css`
    color: ${({ theme }) => theme.colors.primary.hex};
    background-color: transparent;
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.primary.hex};
  `,
  default: css`
    color: ${({ theme }) => theme.colors.gray[700]};
    background-color: ${({ theme }) => theme.colors.gray[100]};
  `,
};

export type ButtonSize = keyof typeof ButtonSizeStyles;
export type ButtonVariant = keyof typeof ButtonVariantStyles;

interface BaseButtonProps {
  $size: ButtonSize;
  $variant: ButtonVariant;
  $css?: CSSProp<DefaultTheme>;
  $fullWidth: boolean;
}

export const BaseButton = styled.button<BaseButtonProps>`
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `};
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
