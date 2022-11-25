import { SCREEN_DESKTOP } from '@/styles/screen';
import theme from '@/styles/theme';
import styled, { css, keyframes } from 'styled-components';

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  height: 25rem;
  background-image: url(/images/background.jpg);
  z-index: 1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  ${SCREEN_DESKTOP} {
    height: 40rem;
  }
`;

export const bottomUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 1rem, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const BannerHeading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.5;
  color: #171717;
  animation: 0.5s ease-in-out 0s 1 normal forwards running ${bottomUp};

  ${SCREEN_DESKTOP} {
    font-size: 3rem;
  }
`;

export const BannerLink = styled.a`
  display: inline-flex;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.875rem 1rem;
  border-radius: 0.5rem;
  animation: 0.75s ease-in-out 0s 1 normal forwards running ${bottomUp};
  transition: background-color 0.2s ease-in;
  cursor: pointer;

  ${SCREEN_DESKTOP} {
    padding: 1.25rem 1.375rem;
    margin-top: 2rem;
    font-size: 1.375rem;
  }

  ${({ theme }) => css`
    color: #ffffff;
    background-color: ${theme.colors.primary.hex};

    &:hover {
      background-color: ${theme.colors.secondary.hex};
    }
  `};
`;
