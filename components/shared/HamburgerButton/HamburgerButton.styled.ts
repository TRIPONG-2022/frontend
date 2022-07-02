import styled, { css } from 'styled-components';

type HamburgerActiveType = {
  active: boolean;
};

export const HamburgerButtonSVG = styled.svg<HamburgerActiveType>`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: transform 400ms;

  ${({ active }) =>
    !active &&
    css`
      transform: rotate(45deg);
    `}
`;

export const LinePath = styled.path<HamburgerActiveType>`
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #000;
  stroke-width: 5.5;
  stroke-linecap: round;
`;

export const LineTopPath = styled(LinePath)`
  stroke-dasharray: 40 139;
  ${({ active }) =>
    !active &&
    css`
      stroke-dashoffset: -98px;
    `}
`;

export const LineBottomPath = styled(LinePath)`
  stroke-dasharray: 40 180;
  ${({ active }) =>
    !active &&
    css`
      stroke-dashoffset: -138px;
    `}
`;
