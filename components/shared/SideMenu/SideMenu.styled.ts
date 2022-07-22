import { MY_PAGE_MENUS } from '@/constants/menus';
import { scaleZ } from '@/styles/keyframes';
import { SCREEN_DESKTOP, SCREEN_TABLET } from '@/styles/screen';
import styled, { css } from 'styled-components';

interface ActiveProps {
  active?: boolean;
  width?: number;
  menus?: typeof MY_PAGE_MENUS;
}

export const Container = styled.div<ActiveProps>`
  width: ${({ width = 10 }) => width}rem;
  height: fit-content;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 2.5px ${({ theme }) => theme.colors.gray[300]};
  cursor: pointer;
  position: relative;

  ${({ active }) =>
    active &&
    css`
      display: block;
    `}

  ${SCREEN_TABLET} {
    width: 15rem;
    margin-right: 5rem;
  }

  ${SCREEN_DESKTOP} {
    margin-right: 7.5rem;
  }
`;

export const Title = styled.div<ActiveProps>`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary.hex};
  color: white;
  border-radius: 10px;
  padding-left: 0.5rem;
  font-size: 1rem;
  font-weight: bold;

  :hover {
    opacity: 0.9;
  }

  ${({ active }) =>
    active &&
    css`
      border-radius: 10px 10px 0 0;
    `}

  ${SCREEN_TABLET} {
    height: 5rem;
    font-size: 1.5rem;
    border-radius: 10px 10px 0 0;
    padding-left: 0;
    svg {
      display: none;
    }
    :hover {
      opacity: 1;
    }
  }
`;

export const SideMenuUl = styled.ul<ActiveProps>`
  width: 100%;
  font-size: 0.875rem;
  padding: 1rem;
  list-style: none;
  background: white;
  border-radius: 0 0 10px 10px;
  display: none;
  position: absolute;
  box-shadow: 0px 5px 10px 2.5px ${({ theme }) => theme.colors.gray[300]};

  ${({ active }) =>
    active &&
    css`
      display: block;
    `}

  ${SCREEN_TABLET} {
    font-size: 1.25rem;
    padding: 1.5rem;
    display: block;
  }
`;

type myMenusType = typeof MY_PAGE_MENUS;

function createScaleZAnimation(menus: myMenusType) {
  let styles = '';

  for (let i = 0; i < menus.length; i++) {
    styles += `
    :nth-child(${i + 1}) {
        transform-origin: top center;
        animation: scaleZ 300ms ${(i + 1) * 60}ms ease-in-out forwards;
      }
    `;
  }
  return css`
    ${styles}
  `;
}

export const SideMenuLi = styled.li<ActiveProps>`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  color: ${({ theme }) => theme.colors.gray[400]};

  // 함수형태로 반복문 사용
  // keyframes components 사용 불가
  ${scaleZ}
  ${({ menus }) => menus && createScaleZAnimation(menus)};

  :hover {
    color: ${({ theme }) => theme.colors.primary.hex};
    font-weight: bold;
  }

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.primary.hex};
      font-weight: bold;
    `}

  ${SCREEN_TABLET} {
    opacity: 1;
    height: 3.75rem;
    :not(:nth-child(0)) {
      animation: unset;
    }
  }
`;
