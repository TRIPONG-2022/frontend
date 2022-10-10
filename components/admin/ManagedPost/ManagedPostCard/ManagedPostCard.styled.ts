import styled, { css } from 'styled-components';

export const Container = styled.li`
  position: relative;
  padding: 1.5rem;

  border: 2px solid;
  border-color: black;
  border-radius: 1rem;

  margin-bottom: 1rem;
`;

export const Title = styled.p`
  margin-bottom: 1.25rem;

  font-size: 1.25rem;
  font-weight: 700;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const NickName = styled.span`
  font-size: 0.875rem;
`;

export const CreatedDate = styled.span`
  font-size: 0.875rem;
`;

export const DropdownContainer = styled.div`
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

export const DropdownList = styled.ul<ActiveProps>`
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

export const DropdownItem = styled.li`
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
