import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.75rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray[50]};
  `}

  @media (min-width: 768px) {
    border-radius: 1rem;
  }
`;

export const SelectContainer = styled.div`
  min-width: 10rem;
`;
