import { SCREEN_TABLET } from '@/styles/screen';
import { Z_INDEX } from '@/styles/z-index';
import styled, { css } from 'styled-components';

interface OptionProps {
  isOpen?: boolean;
  selected?: boolean;
}

interface SelectTypeProps {
  type?: 'auth' | 'profile';
}

export const Container = styled.div<SelectTypeProps>`
  margin-bottom: 1.5rem;
  flex-basis: 100%;

  ${({ type }) =>
    type === 'profile' &&
    css`
      margin-bottom: 0;
      input::placeholder {
        color: transparent;
      }
      ${Label} {
        display: inline-block;
        margin-top: 2rem;
        margin-bottom: 0.5rem;
        padding-left: 1rem;
        font-size: 1rem;
        font-weight: 500;
      }
      ${OptionContainer} {
        background: white;
        border-radius: 1rem;
        box-shadow: 0px 5px 10px 2.5px ${({ theme }) => theme.colors.gray[300]};
        border: none;
        color: black;
        font-size: 1rem;
      }
      ${OptionTitle} {
        background-color: #fff;
        padding: 0.75rem;
        font-size: 0.875rem;
      }
      ${OptionList} {
        background-color: #fff;
      }

      ${SCREEN_TABLET} {
        ${OptionTitle} {
          padding: 1.25rem 0.75rem 1.25rem 1.25rem;
        }
      }
    `}
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  display: block;

  width: 100%;
  height: 1rem;

  font-size: 0.875rem;
  font-weight: 700;
`;

export const OptionContainer = styled.button`
  position: relative;
  width: 100%;
  &:disabled {
    cursor: not-allowed;
  }
`;

export const OptionTitle = styled.div<OptionProps>`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 2px solid;
  border-color: transparent;
  border-radius: 1rem;
  padding: 1.25rem 0.75rem 1.25rem 1.25rem;

  color: ${({ selected, theme }) =>
    selected ? '#000' : theme.colors.gray[500]};
  background-color: ${({ theme }) => theme.colors.gray[50]};

  font-size: 0.875rem;
  text-align: center;
  svg {
    transition: transform 0.2s ease-in-out;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      border-color: ${({ theme }) => theme.colors.primary.hex};

      svg {
        transform: rotate(180deg);
      }
    `}
`;

export const OptionList = styled.ul<OptionProps>`
  position: absolute;
  display: block;
  left: 0;
  right: 0;
  top: calc(100% + 0.5rem);

  max-height: 11rem;
  overflow-y: auto;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: all 0.2s ease-in;
  padding: 0.5rem 0;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-radius: 1rem;
  text-align: center;
  z-index: ${Z_INDEX.DROPDOWN};
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      visibility: visible;
      pointer-events: all;
    `}

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const OptionItem = styled.li<OptionProps>`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  font-size: 0.875rem;
  line-height: 1rem;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    background-color: rgba(${({ theme }) => theme.colors.primary.rgb}, 0.1);
  }
  svg {
    display: none;
    position: absolute;
    left: 1rem;
    color: ${({ theme }) => theme.colors.primary.hex};
  }

  ${({ selected }) =>
    selected &&
    css`
      font-weight: 700;
      svg {
        display: block;
      }
    `};
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${Z_INDEX.DROPDOWN};
`;
