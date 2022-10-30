import { HEADER_HEIGHT } from '@/constants/menus';
import { Z_INDEX } from '@/styles/z-index';
import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${HEADER_HEIGHT};
  z-index: ${Z_INDEX.FIXED};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border-bottom: solid 1px black;
  background-color: white;
`;

export const SelectWrapper = styled.div`
  min-width: 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
export const DeleteIconWrapper = styled.div`
  margin-left: 1rem;
`;

export const SearchInputWrapper = styled.div`
  position: relative;

  flex-grow: 1;
  max-width: 600px;
`;
export const SearchInput = styled.input`
  width: 100%;

  border: 2px solid;
  border-radius: 1.5rem;
  padding: 1.125rem 3.5rem 1.125rem 1rem;

  font-size: 1.25rem;
  font-weight: 600;
  outline: none;

  transition: all 0.5s;
  ::-webkit-search-cancel-button {
    display: none;
  }

  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-color: white;
  :focus {
    background-color: #fff;
    border-color: ${({ theme }) => theme.colors.primary.hex};
    box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translate(0, -55%);
`;
