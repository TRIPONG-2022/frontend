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

interface MenuUlProps {
  toggle: boolean;
}

export const MenuUl = styled.ul<MenuUlProps>`
  width: 110vw;
  height: calc(100vh - ${headerHeight});

  list-style: none;
  background: lightblue;
  position: fixed;
  top: 5rem;
  left: 110vw;
  font-size: 2rem;
  transition: ease-in-out 0.5s;

  @media (min-width: 768px) {
    width: 50%;
    height: auto;
    display: flex;
    justify-content: center;
    position: initial;
    font-size: 1.125rem;
    transition: none;
  }

  ${({ toggle }) =>
    !toggle &&
    css`
      transform: translateX(-110vw);
    `}
`;

export const MenuLi = styled.li`
  margin: 3rem;
  font-weight: bold;

  :first-child {
    margin-top: 5rem;
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    margin: 0 1.25rem;

    :first-child {
      margin-top: 0;
    }
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
  display: flex;
`;

export const LoginBtn = styled.button`
  margin-left: 0.5rem;
  display: none;
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
