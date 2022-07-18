import { opacityIncrease } from '@/styles/keyframes';
import { SCREEN_TABLET } from '@/styles/screen';
import styled, { css } from 'styled-components';

interface ModifyProps {
  isModified?: boolean;
}

export const Container = styled.div<ModifyProps>`
  width: 100%;

  ${({ isModified }) =>
    isModified &&
    css`
      ${InformationTextarea} {
        color: black;
        :focus {
          outline: 2px solid ${({ theme }) => theme.colors.primary.hex};
        }
      }

      ${CharacteristicTagDiv} {
        height: calc(100% - 3rem);
        padding: 1.5rem 1.5rem 3rem 1.5rem;
      }
    `}
`;

export const InfoWrapper = styled.div`
  width: 100%;
`;

export const InfoLabel = styled.label`
  display: inline-block;
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
  color: ${({ theme }) => theme.colors.blackAlpha[500]};
  font-size: 1rem;

  :focus {
    outline: none;
  }
`;

interface InformationTextareaProps {
  textAreaHeight?: number;
}

export const MiniText = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[400]};
  animation: ${opacityIncrease} 0.5s ease-in-out;
`;

export const InformationTextarea = styled.textarea<InformationTextareaProps>`
  width: 100%;
  min-height: 10rem;
  height: ${({ textAreaHeight }) => textAreaHeight}px;
  padding: 1.5rem;
  font-size: 16px;
  background: white;
  border-radius: 1rem;
  resize: none;
  line-height: 1.5;
  box-shadow: 0px 5px 10px 2.5px ${({ theme }) => theme.colors.gray[300]};
  border: none;
  overflow: visible;
  color: ${({ theme }) => theme.colors.blackAlpha[500]};

  :focus {
    outline: none;
  }
`;

export const CharacteristicDiv = styled.div`
  width: 100%;
  min-height: 12rem;
  border-radius: 1rem;
  background: white;
  position: relative;
  border: none;
  resize: none;
  font-size: 16px;
  line-height: 1.5;
  box-shadow: 0px 5px 10px 2.5px ${({ theme }) => theme.colors.gray[300]};
`;

export const CharacteristicTagDiv = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  padding: 1.5rem 1.5rem 0.75rem 1.5rem;
  overflow: scroll;
  border-radius: 1rem;
`;

export const CharacteristicTag = styled.span`
  display: inline-block;
  padding: 0.5rem 0.75rem;
  margin-right: 0.5rem;
  margin-bottom: 0.75rem;
  background: ${({ theme }) => theme.colors.gray[600]};
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  animation: ${opacityIncrease} 0.5s ease-in-out;

  :hover {
    opacity: 0.8;
  }
`;

export const CharacteristicInputDiv = styled.div`
  width: 100%;
  height: 3rem;
  background: ${({ theme }) => theme.colors.gray[400]};
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  position: absolute;
  bottom: 0;
  animation: ${opacityIncrease} 0.5s ease-in-out;
`;

export const CharacteristicInput = styled.input`
  width: calc(100% - 3.75rem);
  height: 100%;
  padding: 0 1rem;
  font-size: 0.75rem;
  border: none;
  background: ${({ theme }) => theme.colors.gray[400]};
  color: white;

  :focus {
    outline: none;
  }

  :disabled {
    background: ${({ theme }) => theme.colors.gray[300]};
  }

  ${SCREEN_TABLET} {
    ::placeholder {
      font-size: 1rem;
    }
  }
`;
export const CharacteristicButton = styled.div`
  width: 3.75rem;
  height: 100%;
  background: ${({ theme }) => theme.colors.gray[600]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 0.25rem;
  cursor: pointer;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  :hover {
    opacity: 0.8;
  }
`;
