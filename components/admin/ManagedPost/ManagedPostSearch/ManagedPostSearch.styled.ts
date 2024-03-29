import styled from 'styled-components';

import { SCREEN_TABLET } from '@/styles/screen';

export const ManagedPostSearchContainer = styled.div`
  display: flex;
  gap: 1rem;

  align-items: center;
  margin-bottom: 2rem;
`;

export const SelectWrapper = styled.div`
  min-width: 9rem;
  flex-shrink: 3;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 6rem;

  border: 2px solid white;
  border-radius: 1.5rem;
  padding: 1.25rem;
  padding-inline-end: 3rem;

  font-size: 1rem;
  background: ${({ theme }) => theme.colors.gray[100]};

  outline: none;
  box-sizing: content-box;
  transition: all 0.5s;

  ::-webkit-search-cancel-button {
    display: none;
  }

  :focus {
    width: 8rem;

    background-color: #fff;
    border-color: ${({ theme }) => theme.colors.primary.hex};
    box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  }

  ${SCREEN_TABLET} {
    width: initial;
    :focus {
      width: initial;
    }
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translate(0, -55%);
`;
