import styled, { css } from 'styled-components';

export const OrderDiv = styled.div`
  height: 100%;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.primary.hex};
  border-radius: 0.5rem;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

interface OrderProps {
  active?: boolean;
}

export const Order = styled(OrderDiv)<OrderProps>`
  width: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.primary.hex};

  :hover {
    background: ${({ theme }) => theme.colors.primary.hex};
    color: white;
  }

  :nth-child(2) {
    display: none;
  }
  ${({ active }) =>
    active &&
    css`
      :nth-child(2) {
        display: flex;
      }
    `}
`;
