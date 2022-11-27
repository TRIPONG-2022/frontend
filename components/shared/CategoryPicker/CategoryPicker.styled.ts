import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const CategoryUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

interface CategoryLiProps {
  active?: boolean;
}

export const CategoryLi = styled.li<CategoryLiProps>`
  padding: 0.5rem 1rem;
  margin: 0 0.5rem 0.5rem 0.5rem;
  background: white;
  color: ${({ theme }) => theme.colors.primary.hex};
  border: 1px solid ${({ theme }) => theme.colors.primary.hex};
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.colors.primary.hex};
    color: white;
  }

  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.colors.primary.hex};
      color: white;
    `}
`;
