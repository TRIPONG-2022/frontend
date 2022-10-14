import styled, { css } from 'styled-components';

interface DropdownItemsProps {
  position: 'left' | 'right';
}

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownItemsContainer = styled.div<DropdownItemsProps>`
  position: absolute;

  ${({ position }) => css`
    ${position}: 0;
  `}

  margin-top: 0.5rem;
`;

export const DropdownItemsInnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 1000;
  padding: 0.5rem 0.25rem;
  border-radius: 0.375rem;
  box-shadow: 0 1px 12px 0 rgb(0, 0, 0, 0.1);
`;

export const DropdownBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 990;
  background-color: transparent;
`;

export const DropdownItem = styled.button`
  padding: 0.625rem 0;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;
