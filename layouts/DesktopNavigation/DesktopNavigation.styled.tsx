import styled, { css } from 'styled-components';

export const DesktopNavigationContainer = styled.div``;

export const NavLinkList = styled.ul`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;

  display: flex;
  list-style: none;

  transform: translateX(-50%);

  &:hover {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const NavLink = styled.a<{ isActive?: boolean }>`
  height: 100%;
  display: inline-flex;
  align-items: center;
  padding: 0 1rem;

  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.gray[900]};
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
`;

export const MenuLink = styled.a<{ primary?: boolean }>`
  font-size: 1rem;
  font-weight: 700;
  padding: 0.75rem 0.75rem;
  border-radius: 0.5rem;

  cursor: pointer;
  color: ${({ theme, primary }) =>
    primary ? '#ffffff' : theme.colors.gray[700]};
  background-color: ${({ theme, primary }) =>
    primary ? theme.colors.primary.hex : theme.colors.gray[100]};
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.75;
  }
`;
