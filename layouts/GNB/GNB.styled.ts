import { HEADER_HEIGHT } from '@/constants/menus';
import styled from 'styled-components';

export const ContainerNav = styled.nav`
  width: 100%;
  height: ${HEADER_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  z-index: 100;
  background: white;
  border-bottom: solid 1px black;
  font-size: 1rem;
`;

export const LogoDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 5vw;

  svg {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const MenuUl = styled.ul`
  display: none;

  @media (min-width: 768px) {
    width: 50%;
    display: flex;
    justify-content: center;
  }
`;

export const MenuLi = styled.li`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    margin: 0 1.25vw;
  }
`;

export const RightDiv = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 2.5vw;

  @media (min-width: 768px) {
    width: 25%;
    margin-right: 5vw;
  }
`;

export const LoginDiv = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const LoginBtn = styled.button`
  display: none;
  margin-left: 1.5vw;
  font-size: 0.825rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const SearchBtn = styled.button``;

export const NavBtn = styled.button`
  display: block;
  margin-left: 1rem;

  @media (min-width: 768px) {
    display: none;
  }
`;
