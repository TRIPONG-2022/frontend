import styled, { css } from 'styled-components';

const headerHeight = '5rem';

export const ContainerNav = styled.nav`
  width: 100%;
  height: ${headerHeight};
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
  display: flex;
  align-items: center;
  justify-content: flex-start;

  div {
    width: 7.5rem;
    height: 2.5rem;
    border: 1px solid black;
    margin-left: 2rem;
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
    margin: 0 1.25rem;
  }
`;

export const RightDiv = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 2rem;

  @media (min-width: 768px) {
    width: 25%;
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
  margin-left: 1rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const SearchBtn = styled.button`
  margin-left: 1rem;
`;

export const NavBtn = styled.button`
  display: block;
  margin-left: 1rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

// 네이게이션 메뉴

interface NavDivProps {
  toggle: boolean;
}

export const NavDiv = styled.div<NavDivProps>`
  width: 100vw;
  height: calc(100vh - ${headerHeight});
  background: white;
  position: fixed;
  right: 0;
  top: ${headerHeight};
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
