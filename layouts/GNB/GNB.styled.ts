import { HEADER_HEIGHT } from '@/constants/menus';
import { SCREEN_TABLET } from '@/constants/screen';
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
  width: 25%;
  height: 100%;
  margin-left: 5vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    cursor: pointer;
  }

  ${SCREEN_TABLET} {
    width: 50%;
  }
`;

export const MenuUl = styled.ul`
  display: flex;
  width: 50%;
  justify-content: center;

  ${SCREEN_TABLET} {
    display: none;
  }
`;

export const MenuLi = styled.li`
  align-items: center;
  margin: 0 1.25vw;
  display: flex;

  ${SCREEN_TABLET} {
    display: none;
  }
`;

export const RightDiv = styled.div`
  width: 25%;
  margin-right: 5vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${SCREEN_TABLET} {
    width: 80%;
    margin-right: 2.5vw;
  }
`;

export const LoginDiv = styled.div`
  display: flex;

  ${SCREEN_TABLET} {
    display: none;
  }
`;

export const LoginBtn = styled.button`
  display: flex;
  margin-left: 1.5vw;
  font-size: 0.825rem;

  ${SCREEN_TABLET} {
    display: none;
  }
`;

export const SearchBtn = styled.button``;

export const NavBtn = styled.button`
  display: none;
  margin-left: 1rem;

  ${SCREEN_TABLET} {
    display: block;
  }
`;
