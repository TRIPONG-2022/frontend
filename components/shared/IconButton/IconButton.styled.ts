import styled, { css, CSSProp, DefaultTheme } from 'styled-components';

export const IconButtonSizeStyles = {
  sm: css`
    width: 1.5rem;
    height: 1.5rem;
  `,
  md: css`
    width: 2.5rem;
    height: 2.5rem;
  `,
  lg: css`
    width: 3rem;
    height: 3rem;
  `,
  xlg: css`
    width: 3.5rem;
    height: 3.5rem;
  `,
};

export const IconButtonColorSchemeStyles = {
  primary: css`
    color: #ffffff;
    background-color: #0dc5d6;
  `,
  default: css`
    color: ${({ theme }) => theme.colors.gray[700]};
    background-color: ${({ theme }) => theme.colors.gray[100]};
  `,
  naver: css`
    color: #ffffff;
    background-color: #03c75a;
  `,
  kakao: css`
    color: #000000;
    background-color: #ffd70e;
  `,
  facebook: css`
    color: #ffffff;
    background-color: #3479ea;
  `,
  google: css`
    background-color: #ffffff;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  `,
};

export type IconButtonSize = keyof typeof IconButtonSizeStyles;
export type IconButtonColorScheme = keyof typeof IconButtonColorSchemeStyles;

interface BaseIconButtonProps {
  $size: IconButtonSize;
  $colorScheme: IconButtonColorScheme;
  $isRound?: boolean;
  $css?: CSSProp<DefaultTheme>;
}

export const BaseIconButton = styled.button<BaseIconButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ $isRound }) => ($isRound ? '9999px' : '0.5rem')};

  &:hover {
    opacity: 0.75;
  }

  &:disabled {
    opacity: 0.25;
    pointer-events: none;
  }
  ${({ $size, $colorScheme, $css }) => css`
    ${IconButtonSizeStyles[$size]}
    ${IconButtonColorSchemeStyles[$colorScheme]}
    ${$css}
  `};
`;
