import { Z_INDEX } from '@/styles/z-index';
import styled, { css } from 'styled-components';

interface OptionProps {
  isOpen: boolean;
}

export const Container = styled.div`
  margin-bottom: 1.5rem;
  flex-basis: 100%;
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

  background-color: ${({ theme }) => theme.colors.gray[50]};

  font-size: 0.875rem;
  text-align: center;
  cursor: pointer;
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

  max-height: 12rem;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }

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
`;

export const OptionItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.75rem;
  font-size: 0.875rem;
  line-height: 1rem;
  transition: all 0.2s ease-in;
  cursor: pointer;
  &:hover {
    background-color: rgba(${({ theme }) => theme.colors.primary.rgb}, 0.1);
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${Z_INDEX.DROPDOWN};
`;
