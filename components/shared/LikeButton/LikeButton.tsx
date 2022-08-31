import { useState } from 'react';
import styled, { css } from 'styled-components';

const LikeButton = () => {
  const [toggle, setTolggle] = useState(false);
  return (
    <SVG viewBox="0 0 100 100" onClick={() => setTolggle((prev) => !prev)}>
      <g>
        <Path
          toggle={toggle}
          d="M 90,40 a 20 20 0 1 0 -40,-25 a 20 20 0 1 0 -40,25 l 40,50  z"
        />
        <PathTwo
          toggle={toggle}
          d="M 90,40 a 20 20 0 1 0 -40,-25 a 20 20 0 1 0 -40,25 l 40,50  z"
        />
      </g>
    </SVG>
  );
};

export default LikeButton;

interface PathProps {
  toggle: boolean;
}

const SVG = styled.svg`
  overflow: visible;
  width: 16px;
`;

const Path = styled.path<PathProps>`
  fill: none;
  stroke: transparent;
  transform-box: border-box;
  transform-origin: 50% 50%;
  stroke-width: 12px;
  transform: scale(0.5);
  transition: none;
  ${({ toggle }) =>
    toggle &&
    css`
      transform: scale(2);
      opacity: 0;
      stroke: #eb2424;
      transform-box: border-box;
      transform-origin: 50% 50%;
      transition: transform, stroke, opacity;
      transition-duration: 0.6s, 0.01s, 0.4s;
      transition-delay: 0s, 0s, 0.2s;
    `}
`;

const PathTwo = styled.path<PathProps>`
  fill: transparent;
  stroke: #eb2424;
  stroke-width: 6;
  transition: all 0.6s ease-out;

  ${({ toggle }) =>
    toggle &&
    css`
      fill: #eb2424;
    `}
`;
