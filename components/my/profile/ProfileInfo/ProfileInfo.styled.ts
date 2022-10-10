import styled, { css } from 'styled-components';

import { opacityIncrease } from '@/styles/keyframes';
import { SCREEN_TABLET } from '@/styles/screen';

interface ModifyProps {
  isEdit?: boolean;
}

export const ProfileInfoContainer = styled.div<ModifyProps>`
  width: 100%;

  ${({ isEdit }) =>
    isEdit &&
    css`
      ${InformationTextarea} {
        color: black;
        :focus {
          outline: 2px solid ${({ theme }) => theme.colors.primary.hex};
        }
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
  padding: 1rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0px 5px 10px 2.5px ${({ theme }) => theme.colors.gray[300]};
  border: none;
  color: black;
  font-size: 1rem;

  :focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.hex};
  }

  :read-only {
    color: ${({ theme }) => theme.colors.blackAlpha[500]};
    :focus {
      outline: none;
    }
  }

  ${SCREEN_TABLET} {
    padding: 1.5rem;
  }
`;

export const InfoContentErrorMessage = styled.p`
  margin-top: 1rem;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors.error.hex};
  font-size: 0.75rem;
`;

export const MiniText = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[400]};
  animation: ${opacityIncrease} 0.5s ease-in-out;
`;

export const InformationTextarea = styled.textarea`
  width: 100%;
  min-height: 10rem;
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

  ${SCREEN_TABLET} {
    padding: 1.5rem;
  }
`;
