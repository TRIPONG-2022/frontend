import styled, { css } from 'styled-components';

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
`;

interface PageProps {
  page?: boolean;
}

export const Page = styled.button<PageProps>`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.primary.hex};
  color: ${({ theme }) => theme.colors.primary.hex};
  border-radius: 9999px;

  :hover {
    ${({ theme }) => css`
      background: ${theme.colors.primary.hex};
      color: white;
    `};
    cursor: pointer;
  }

  :disabled {
    ${({ theme }) => css`
      background: white;
      color: ${theme.colors.gray[400]};
      border: 1px solid ${theme.colors.gray[400]};
      cursor: auto;
    `};
  }

  ${({ page, theme }) =>
    page &&
    css`
      background: ${theme.colors.primary.hex};
      color: white;
    `}
`;
