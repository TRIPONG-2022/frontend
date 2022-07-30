import { SCREEN_TABLET } from '@/styles/screen';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProfileImageDiv = styled.div`
  width: 15rem;
  aspect-ratio: 1 / 1;
  margin-bottom: 1rem;

  ${SCREEN_TABLET} {
    width: 17.5rem;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  box-shadow: inset 0px 2.5px 10px 5px ${({ theme }) => theme.colors.gray[300]};
  overflow: hidden;
  cursor: pointer;
  background-image: red;
`;

export const NicknameDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Nickname = styled.p`
  text-align: center;
  border: none;
  font-size: 2rem;
  padding: 0.25rem 0;
  width: fit-content;
`;
export const NicknameInput = styled.input`
  width: 15rem;
  text-align: center;
  font-size: 1.75rem;
  border: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid black;
  :focus {
    outline: none;
  }
`;
