import { SCREEN_DESKTOP, SCREEN_TABLET } from '@/styles/screen';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1.75rem;

  ${SCREEN_TABLET} {
    padding-left: 0;
  }
`;

export const ProfileWrapper = styled.div`
  display: block;

  ${SCREEN_DESKTOP} {
    display: flex;
  }
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.5rem;

  ${SCREEN_DESKTOP} {
    margin-right: 5rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 3rem;
  margin: 3rem 0 10rem 0;
  /* background: lightblue; */
  text-align: center;

  button {
    margin: 1rem;
  }
`;