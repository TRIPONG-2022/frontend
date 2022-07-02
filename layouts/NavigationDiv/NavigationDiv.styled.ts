import { HEADER_HEIGHT } from '@/constants/menus';
import { SCREEN_TABLET } from '@/constants/screen';
import styled, { css } from 'styled-components';

interface NavDivProps {
  toggle: boolean;
}

export const NavDiv = styled.div<NavDivProps>`
  width: 100vw;
  height: calc(100vh - ${HEADER_HEIGHT});
  background: white;
  position: fixed;
  right: 0;
  top: ${HEADER_HEIGHT};
  display: none;
  transition: none;
  padding: 3.75rem;

  ${({ toggle }) =>
    toggle &&
    css`
      transform: translateX(125vw);
    `}

  ${SCREEN_TABLET} {
    display: block;
    transition: transform 0.5s;
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
