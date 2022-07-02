import styled, { css } from 'styled-components';
import { markdownStyles } from '@/styles/markdown';

export const EditorContentContainer = styled.div`
  ${({ theme }) => css`
    height: 32rem;
    border-radius: 0.75rem;
    padding: 1.25rem;
    background-color: ${theme.colors.gray[50]};

    overflow-y: auto;
    &::-webkit-scrollbar {
      background-color: transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 9999px;
      border: 0.25rem solid transparent;
      background-color: rgba(${theme.colors.primary.rgb}, 0.5);
      background-clip: content-box;
    }
    &:focus-within {
      box-shadow: inset 0 0 0 2px ${theme.colors.primary.hex};
    }

    @media (min-width: 768px) {
      border-radius: 1rem;
      padding: 1.5rem;
    }

    .ProseMirror {
      outline: none;
      border: 0;
      ${markdownStyles}
    }
  `}
`;
