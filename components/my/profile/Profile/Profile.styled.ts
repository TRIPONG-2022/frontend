import { SCREEN_DESKTOP, SCREEN_TABLET } from '@/styles/screen';
import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ProfileImageWrapper = styled.div`
  display: block;

  ${SCREEN_DESKTOP} {
    display: flex;
  }
`;

export const ProfileImageArea = styled.div`
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
  text-align: center;

  button {
    margin: 1rem;
  }
`;
