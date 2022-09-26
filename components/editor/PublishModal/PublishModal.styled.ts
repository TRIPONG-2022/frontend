import styled, { css } from 'styled-components';

export const OuterContainer = styled.div<{ $isOpen?: boolean }>`
  position: fixed;
  top: ${({ $isOpen }) => ($isOpen ? '0' : '125%')};
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: all 0.25s ease-in-out;
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 25rem;
  border-radius: 1rem;
`;

export const PublishModalHeading = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const ThumbnailHandleContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  margin-bottom: 1rem;
  column-gap: 0.5rem;
  text-decoration: underline;
  ${({ theme }) => css`
    color: ${theme.colors.gray[600]};
  `}

  label {
    cursor: pointer;
  }
  button {
    color: inherit;
  }
`;

export const ThumbnailContainer = styled.div`
  position: relative;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  overflow: hidden;

  ${({ theme }) => css`
    color: ${theme.colors.secondary.hex};
    background-color: ${theme.colors.gray[100]};
  `}
`;

export const ThumbnailUploadLabel = styled.label`
  display: block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;

  ${({ theme }) => css`
    color: ${theme.colors.primary.hex};
    background-color: #ffffff;
  `}

  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 0.75rem;
`;
