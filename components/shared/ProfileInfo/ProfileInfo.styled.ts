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
      }
    `}
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
  color: ${({ theme }) => theme.colors.blackAlpha[500]};
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
  color: ${({ theme }) => theme.colors.blackAlpha[500]};

  :focus {
    outline: none;
  }
`;

export const CharacteristicDiv = styled.div`
  width: 100%;
  height: 12rem;
  font-size: 16px;
  background: white;
  border-radius: 1rem;
  resize: none;
  line-height: 1.5;
  box-shadow: 0px 5px 10px 2.5px ${({ theme }) => theme.colors.gray[300]};
  background: white;
  border: none;
  overflow: hidden;
`;

export const CharacteristicTagDiv = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  padding: 1.5rem 1.5rem 0 1.5rem;
  overflow: scroll;
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
`;

export const CharacteristicInput = styled.input`
  width: calc(100% - 3.75rem);
  height: 100%;
  padding: 0 1rem;
  font-size: 1rem;
  border: none;
  background: ${({ theme }) => theme.colors.gray[400]};
  color: white;
  :focus {
    outline: none;
  }
`;
export const CharacteristicButton = styled.button`
  width: 3.75rem;
  height: 100%;
  background: ${({ theme }) => theme.colors.gray[600]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 0.25rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  :hover {
    opacity: 0.8;
  }
`;
