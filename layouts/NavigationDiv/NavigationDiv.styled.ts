import { HEADER_HEIGHT } from '@/constants/menus';
import { SCREEN_TABLET } from '@/styles/screen';
import styled, { css } from 'styled-components';

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
  transform: none;
  transition: transform ease-in-out 0.45s;

  ${({ toggle }) =>
    !toggle &&
    css`
      transition: transform ease-in-out 0.45s;
      transform: translateX(125vw);
    `}

  ${SCREEN_TABLET} {
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

export const NavLoginUl = styled.ul`
  width: 100%;
  list-style: none;
  margin-top: 15rem;
  margin-left: 2rem;

  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  padding-right: 2rem;
`;

export const NavLoginLi = styled.li`
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: bold;
`;
