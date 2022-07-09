import { FADE_IN } from '@/styles/keyframes';
import styled, { css } from 'styled-components';

export const TagList = styled.ul`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const TagItem = styled.li`
  height: 2rem;
  padding: 0 0.75rem;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 0.875rem;
  cursor: pointer;

  animation: 0.25s ${FADE_IN} cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);

  ${({ theme }) => css`
    color: ${theme.colors.primary.hex};
    box-shadow: inset 0 0 0 2px ${theme.colors.primary.hex};
    &:hover {
      color: #ffffff;
      background-color: ${theme.colors.primary.hex};
    }
  `}
  @media (min-width: 768px) {
    height: 2.25rem;
    font-size: 1rem;
  }
`;

export const Input = styled.input`
  width: 15rem;
  height: 2rem;
  margin: 0;
  border: 0;
  outline: 0;

  font-size: 0.875rem;
  background-color: transparent;

  ${({ theme }) => css`
    &::placeholder {
      color: ${theme.colors.blackAlpha[400]};
    }
  `}

  @media (min-width: 768px) {
    height: 2.25rem;
    font-size: 1rem;
  }
`;
