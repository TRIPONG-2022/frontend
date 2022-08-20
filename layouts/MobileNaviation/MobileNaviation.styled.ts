import styled, { css } from 'styled-components';
import { SCREEN_DESKTOP } from '@/styles/screen';
import { HEADER_HEIGHT } from '@/constants/menus';

interface NavDivProps {
  toggle: boolean;
}

export const NavDiv = styled.div<NavDivProps>`
  display: block;
  width: 100vw;
  height: calc(100vh - ${HEADER_HEIGHT});
  padding: 3.75rem;
  background: white;
  position: fixed;
  top: ${HEADER_HEIGHT};
  opacity: 0;
  transform: translateX(100vw);
  transition: transform 0.4s ease-in-out, opacity 0.2s ease;

  ${({ toggle }) =>
    toggle &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}

  ${SCREEN_DESKTOP} {
    display: none;
  }
`;

export const NavMenuUl = styled.ul`
  width: 100%;
  list-style: none;
`;

export const NavMenuLi = styled.li`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
`;

export const NavBottomUl = styled.ul`
  width: 100%;
  list-style: none;
  margin-top: 15rem;
  margin-left: 2rem;

  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  padding-right: 2rem;
`;

export const NavBottomLi = styled.li`
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;
