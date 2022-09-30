import styled, { css } from 'styled-components';

import { opacityIncrease } from '@/styles/keyframes';
import { SCREEN_TABLET } from '@/styles/screen';

interface ModifyProps {
  isEdit?: boolean;
}

export const Container = styled.div<ModifyProps>`
  width: 100%;

  ${({ isEdit }) =>
    isEdit &&
    css`
      ${TagsDiv} {
        height: calc(100% - 3rem);
      }
    `}
`;

export const InfoLabel = styled.label`
  display: inline-block;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
`;

export const MiniText = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[400]};
  animation: ${opacityIncrease} 0.5s ease-in-out;
`;

export const TagsDiv = styled.div`
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

export const TagDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background: white;
  padding: 1.5rem 1.5rem 0.75rem 1.5rem;
  overflow: scroll;
  border-radius: 1rem;
`;

export const Tag = styled.span`
  display: flex;
  width: fit-content;
  padding: 0.375rem 0.75rem;
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

export const TagsInputDiv = styled.div`
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

export const TagsInput = styled.input`
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
export const TagsButton = styled.div`
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
