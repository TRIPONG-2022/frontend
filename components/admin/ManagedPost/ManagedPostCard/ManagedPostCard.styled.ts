import styled, { css } from 'styled-components';

export const MenuContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.5rem;

  z-index: 100;
  cursor: pointer;
`;

interface ActiveProps {
  toggle: boolean;
}

export const Back = styled.div<ActiveProps>`
  ${({ toggle }) =>
    toggle &&
    css`
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      z-index: 5;
    `}
`;

export const MenuList = styled.ul<ActiveProps>`
  position: absolute;
  top: 1rem;
  right: 0;

  ${({ toggle }) =>
    !toggle &&
    css`
      display: none;
    `}

  z-index: 20;
  background-color: white;
`;

export const MenuItem = styled.li`
  width: 5rem;

  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray[500]};
  border-radius: 0.5rem;

  padding: 0.5rem 0;

  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[500]};

  z-index: 10;
`;
