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

export const ProfileImageDiv = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  background: white;
  box-shadow: inset 0px 2.5px 10px 5px ${({ theme }) => theme.colors.gray[300]};
  overflow: hidden;
  margin-bottom: 1rem;
  cursor: pointer;

  ${SCREEN_TABLET} {
    width: 17.5rem;
    height: 17.5rem;
  }
`;
export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const NicknameDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Nickname = styled.p`
  text-align: center;
  border: none;
  font-size: 1.75rem;
  padding: 0.25rem 0;
  width: fit-content;
  :focus {
    outline: none;
  }
`;
export const NicknameInput = styled.input`
  text-align: center;
  font-size: 1.75rem;
  border: none;
  margin: 0;
  padding: 0;
  width: fit-content;
  :focus {
    outline: none;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
`;

export const InfoP = styled.p`
  margin-bottom: 0.5rem;
  padding-left: 1rem;

  :not(:first-child) {
    margin-top: 2rem;
  }
`;

export const InfoContentInput = styled.input`
  width: 100%;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0px 5px 10px 2.5px ${({ theme }) => theme.colors.gray[300]};
  border: none;
  font-size: 1rem;

  :focus {
    outline: none;
  }
`;

export const InformationTextarea = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 1.5rem;
  font-size: 16px;
  background: white;
  border-radius: 1rem;
  resize: none;
  line-height: 1.5;
  box-shadow: 0px 5px 10px 2.5px ${({ theme }) => theme.colors.gray[300]};
  border: none;

  :focus {
    /* border: outset 2px solid ${({ theme }) => theme.colors.primary.hex}; */
    outline: 2px solid ${({ theme }) => theme.colors.primary.hex};
  }
`;

export const CharacteristicDiv = styled.div`
  width: 100%;
  height: 10rem;
  padding: 1.5rem;
  font-size: 16px;
  background: white;
  border-radius: 1rem;
  resize: none;
  line-height: 1.5;
  box-shadow: 0px 5px 10px 2.5px ${({ theme }) => theme.colors.gray[300]};
  border: none;

  :focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.hex};
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
