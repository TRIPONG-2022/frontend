import { SCREEN_TABLET } from '@/styles/screen';
import styled, { css } from 'styled-components';

interface ContainerProps {
  flexDirection: 'column' | 'row';
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1rem;

  ${({ flexDirection }) =>
    flexDirection === 'row' &&
    css`
      flex-direction: ${flexDirection};
      * {
        margin-bottom: 0;
      }
      ${NicknameDiv} {
        justify-content: flex-start;
        margin-left: 1rem;
      }
    `};
`;

interface ProfileImageDivProps {
  width: number;
}

export const ProfileImageDiv = styled.div<ProfileImageDivProps>`
  width: ${({ width }) => width}rem;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  ${SCREEN_TABLET} {
    width: ${({ width }) => width * 1.125}rem;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: white;
  box-shadow: inset 0px 2.5px 10px 5px ${({ theme }) => theme.colors.gray[300]};
  overflow: hidden;
  cursor: pointer;
`;

export const NicknameDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

interface NicknameProps {
  fontSize: number;
}

export const Nickname = styled.p<NicknameProps>`
  text-align: center;
  border: none;
  font-size: ${({ fontSize }) => fontSize}rem;
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
