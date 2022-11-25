import styled, { css } from 'styled-components';
import { SCREEN_DESKTOP } from '@/styles/screen';
import { HEADER_HEIGHT } from '@/constants/menus';

export const MobileNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    border-radius: 9999px;
    color: #000000;
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray[100]};
    }
  }
`;

export const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: ${HEADER_HEIGHT};
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  transition: transform 0.4s ease-in-out, opacity 0.25s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${SCREEN_DESKTOP} {
    display: none;
  }

  ${({ isOpen }) => css`
    opacity: ${isOpen ? 1 : 0};
    transform: ${isOpen ? 'translateX(0)' : 'translateX(100%)'};
  `}
`;

export const MenuList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  list-style: none;
`;

export const MenuItem = styled.li`
  padding: 0.875rem 1.25rem;
  font-size: 1.625rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;

export const BottomWrapper = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.gray[200]};
    color: ${theme.colors.gray[700]};
    background-color: ${theme.colors.gray[100]};
  `};

  & > a:hover {
    text-decoration: underline;
  }
`;
