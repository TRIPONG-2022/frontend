import { HEADER_HEIGHT } from '@/constants/menus';
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
  transition: transform 0.5s;
  padding: 3.75rem;

  ${({ toggle }) =>
    toggle &&
    css`
      transform: translateX(150vw);
    `}

  @media (min-width: 768px) {
    display: none;
    transition: none;
  }
`;

export const NavMenuUl = styled.ul`
  width: 100%;
  list-style: none;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavMenuLi = styled.li`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;

  @media (min-width: 768px) {
    display: none;
  }
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

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavLoginLi = styled.li`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;

  @media (min-width: 768px) {
    display: none;
  }
`;
