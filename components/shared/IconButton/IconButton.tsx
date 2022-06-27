import React from 'react';
import { CSSProp, DefaultTheme } from 'styled-components';
import SVGIcon, { SVGIconType } from '../SVGIcon';
import * as Styled from './IconButton.styled';

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label': string;
  icon: SVGIconType;
  size?: Styled.IconButtonSize;
  iconSize?: number | string;
  colorScheme?: Styled.IconButtonColorScheme;
  css?: CSSProp<DefaultTheme>;
  isRound?: boolean;
}

export default function IconButton({
  icon,
  iconSize,
  css,
  isRound,
  size = 'md',
  colorScheme = 'primary',
  ...buttonProps
}: IconButtonProps) {
  return (
    <Styled.BaseIconButton
      $css={css}
      $size={size}
      $colorScheme={colorScheme}
      $isRound={isRound}
      {...buttonProps}
    >
      <SVGIcon icon={icon} size={iconSize} />
    </Styled.BaseIconButton>
  );
}
