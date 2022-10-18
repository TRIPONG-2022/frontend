import { SCREEN_DESKTOP, SCREEN_TABLET } from '@/styles/screen';
import styled, { css } from 'styled-components';

export const LayoutContainer = styled.div`
  display: block;
  width: 100%;
  margin-top: 2rem;
  ${SCREEN_TABLET} {
    margin-top: 5rem;
    display: flex;
  }
`;

export const LayoutSideMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 3.75rem;
  ${SCREEN_TABLET} {
    justify-content: center;
  }
`;

export const LayoutBody = styled.div`
  width: 100%;
`;

interface ActiveProps {
  active?: boolean;
  width?: number;
}
export const SideMenu = styled.div<ActiveProps>`
  width: ${({ width = 10 }) => width}rem;
  height: fit-content;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 2.5px ${({ theme }) => theme.colors.gray[300]};
  cursor: pointer;
  position: relative;
  ${({ active }) =>
    active &&
    css`
      display: block;
    `}
  ${SCREEN_TABLET} {
    width: 15rem;
    margin-right: 7.5rem;
  }
`;

export const RoleContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1.75rem;
  ${SCREEN_TABLET} {
    padding-left: 0;
  }
`;

export const Test = styled.div`
  display: inline-block;
  max-width: 1120px;
  border: 2px solid black;
  border-radius: 1rem;
  padding: 1rem;

  span {
    display: block;

    font-weight: 600;
  }
`;
