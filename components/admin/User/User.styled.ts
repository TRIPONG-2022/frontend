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

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1.75rem;
  ${SCREEN_TABLET} {
    padding-left: 0;
  }
`;

// 위에는 성진님꺼
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const GetUsersBtn = styled.button<{
  active: boolean;
}>`
  font-size: 1rem;
  font-weight: 800;
  padding: 1rem;
  background-color: rgba(
    ${({ active, theme }) => (active ? theme.colors.primary.rgb : null)},
    0.4
  );
  border-radius: 1.5rem;

  margin-right: 1rem;
  margin-bottom: 2rem;
`;
