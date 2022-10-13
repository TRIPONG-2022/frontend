import { SCREEN_TABLET } from '@/styles/screen';
import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  width: 100%;
  margin-top: 2rem;

  ${SCREEN_TABLET} {
    margin-top: 5rem;
    display: flex;
  }
`;

export const SideMenuContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 3.75rem;

  ${SCREEN_TABLET} {
    justify-content: center;
  }
`;

export const Body = styled.div`
  width: 100%;
  min-height: 75vh;
`;
