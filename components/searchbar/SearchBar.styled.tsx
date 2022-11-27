import { HEADER_HEIGHT } from '@/constants/menus';
import { SCREEN_DESKTOP, SCREEN_TABLET } from '@/styles/screen';
import { Z_INDEX } from '@/styles/z-index';
import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  position: fixed;
  /* 만약 헤더가 없는 경우에 top 5rem을 적용해줄 예정*/
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: ${Z_INDEX.PORTAL_FIXED};

  background-color: rgba(255, 255, 255, 0.5);
`;

// 만약 헤더가 있을 경우
// 아닌경우에는 그냥 Icon을 GNB 컴포넌트에서 state 따라 바꿔줄지 생각 중
export const Header = styled.div`
  height: 5rem;

  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoDiv = styled.div`
  width: 50%;
  height: 100%;
  margin-left: 5vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    cursor: pointer;
  }

  ${SCREEN_DESKTOP} {
    width: 25%;
  }
`;

export const HeaderDelete = styled.div`
  margin-right: 5vw;
`;
// 헤더 있을 경우

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  height: 10rem;

  background-color: white;
`;

export const SelectWrapper = styled.div`
  min-width: 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  ${SCREEN_TABLET} {
    min-width: 10rem;
  }
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

  ::placeholder {
    font-size: 1rem;
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translate(0, -55%);
`;
