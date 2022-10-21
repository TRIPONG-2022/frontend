import { keyframes } from 'styled-components';

export const scaleZ = `
@keyframes scaleZ {

  0% {
    opacity: 0;
    transform: scale(0);
  }
  
  80% {
    transform: scale(1.07);
  }
  
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
`;

export const opacityIncrease = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export const FADE_IN = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
