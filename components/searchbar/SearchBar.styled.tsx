import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  position: fixed;
  top: 0.375rem;
  left: 0;
  right: 0;
  z-index: 9999;
`;

export const SearchInput = styled.input`
  width: calc(100% - 7rem);
  border: 2px solid;
  border-radius: 1.5rem;
  padding: 1.25rem 3.5rem;

  font-size: 1.25rem;
  font-weight: 600;
  outline: none;
  box-sizing: content-box;
  transition: all 0.5s;
  ::-webkit-search-cancel-button {
    display: none;
  }

  background-color: #fff;
  border-color: ${({ theme }) => theme.colors.primary.hex};
  box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translate(0, -55%);
`;

export const DeleteIconWrapper = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translate(0, -55%);
`;
