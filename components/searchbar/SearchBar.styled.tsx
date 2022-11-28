import styled from 'styled-components';

import { Z_INDEX } from '@/styles/z-index';
import { slideDown } from '@/styles/keyframes';
import { SCREEN_DESKTOP } from '@/styles/screen';
import { HEADER_HEIGHT } from '@/constants/menus';

export const SearchBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: ${Z_INDEX.PORTAL_FIXED};

  background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0.4));
`;

export const SearchHeaderWrapper = styled.div`
  height: ${HEADER_HEIGHT};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled.a`
  cursor: pointer;
`;

export const SearchHeaderCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem;
  border-radius: 9999px;
  color: #000000;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;

export const SearchContentWrapper = styled.div`
  height: 10rem;
  display: flex;
  max-width: 768px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  animation: ${slideDown} 0.25s ease-in;
`;

export const SelectWrapper = styled.div`
  width: 100%;
  max-width: 6rem;
  margin-right: 1rem;

  ${SCREEN_DESKTOP} {
    max-width: 8rem;
  }
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  width: 100%;
  transition: box-shadow 0.15s ease-in-out;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  padding: 1.125rem 1.5rem;
  border-radius: 1rem;
  :focus-within {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.primary.hex};
  }
`;

export const SearchInput = styled.input`
  width: 100%;

  border: 0;
  margin: 0;
  padding: 0;
  font-size: 1.125rem;
  font-weight: 500;
  outline: none;
  background-color: transparent;
`;
