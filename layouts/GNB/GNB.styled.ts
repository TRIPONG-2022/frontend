import { HEADER_HEIGHT } from '@/constants/menus';
import { SCREEN_DESKTOP } from '@/styles/screen';
import { Z_INDEX } from '@/styles/z-index';
import styled from 'styled-components';

export const GNBHeader = styled.header`
  width: 100%;
  height: ${HEADER_HEIGHT};
  position: fixed;
  top: 0;
  z-index: ${Z_INDEX.HEADER};
`;

export const GNBNav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  background: white;
  border-bottom: solid 1px black;
  font-size: 1rem;
`;

export const LogoDiv = styled.div`
  width: 50%;
  height: 100%;
  margin-left: 5vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    cursor: pointer;
  }

  ${SCREEN_DESKTOP} {
    width: 25%;
  }
`;

export const MenuUl = styled.ul`
  display: none;
  width: 50%;
  justify-content: center;

  ${SCREEN_DESKTOP} {
    display: flex;
  }
`;

export const MenuLi = styled.li`
  align-items: center;
  margin: 0 1.25vw;
  display: none;
  cursor: pointer;

  ${SCREEN_DESKTOP} {
    display: flex;
  }
`;

export const RightDiv = styled.div`
  width: 80%;
  margin-right: 2.5vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${SCREEN_DESKTOP} {
    width: 25%;
    margin-right: 5vw;
  }
`;

export const LoginJoinDiv = styled.div`
  display: none;

  ${SCREEN_DESKTOP} {
    display: flex;
  }
`;

export const RightButton = styled.button`
  display: none;
  margin-left: 1.5vw;
  font-size: 0.825rem;

  ${SCREEN_DESKTOP} {
    display: flex;
  }
`;

export const SearchBtn = styled.button``;

export const NavBtn = styled.button`
  display: block;
  margin-left: 1rem;

  ${SCREEN_DESKTOP} {
    display: none;
  }
`;
