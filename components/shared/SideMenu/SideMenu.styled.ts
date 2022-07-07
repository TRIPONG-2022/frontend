import styled, { css } from 'styled-components';

interface ContainerProps {
  width?: number;
}
export const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  box-shadow: 0px 5px 10px 2.5px lightgrey;
  ${({ width = 15 }) => css`
    width: ${width}rem;
  `}
`;

export const Title = styled.div`
  width: 100%;
  height: 5rem;
  font-size: 30px;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary.hex};
  color: white;
`;

export const SideMenuUl = styled.ul`
  font-size: 20px;
  width: 100%;
  list-style: none;
  padding: 1.5rem;
  background: white;
  border-radius: 0 0 10px 10px;
`;

interface SideMenuLiProps {
  active?: boolean;
}

export const SideMenuLi = styled.li<SideMenuLiProps>`
  width: 100%;
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.primary.hex};
    `}
`;
