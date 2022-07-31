import styled, { css } from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  padding: 1.25rem;

  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.colors.gray[50]};

  @media (min-width: 768px) {
    padding: 1.5rem;
    border-radius: 1rem;
  }
`;

export const MenuButton = styled.button<{ $isActive?: boolean }>`
  padding: 0.375rem;
  border-radius: 0.375rem;
  transition: all 0.15s ease-in;

  ${({ theme, $isActive }) => css`
    color: ${$isActive ? '#ffffff' : theme.colors.gray[600]};
    background-color: ${$isActive ? theme.colors.primary.hex : 'transparent'};

    &:hover {
      color: #ffffff;
      background-color: ${theme.colors.primary.hex};
    }
  `}
`;

export const MenuButtonLabel = styled.label<{ $isActive?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem;
  border-radius: 0.375rem;
  ${({ theme, $isActive }) => css`
    color: ${$isActive ? '#ffffff' : theme.colors.gray[600]};
    background-color: ${$isActive ? theme.colors.primary.hex : 'transparent'};

    &:hover {
      color: #ffffff;
      cursor: pointer;
      background-color: ${theme.colors.primary.hex};
    }
  `}
`;

export const Divider = styled.div`
  width: 2px;
  height: 1.5rem;
  margin-left: 0.5rem;
  margin-right: 0.75rem;
  background-color: ${({ theme }) => theme.colors.blackAlpha[100]};
`;
