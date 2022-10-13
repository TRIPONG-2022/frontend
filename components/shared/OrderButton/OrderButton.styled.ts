import styled, { css } from 'styled-components';

export const OrderButtonContainer = styled.div`
  position: relative;
`;

interface ActiveProps {
  active?: boolean;
}

export const Backdrop = styled.div<ActiveProps>`
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0);
  ${({ active }) =>
    active &&
    css`
      display: block;
    `};
`;

export const SelectOrder = styled.div`
  display: flex;
  justify-content: center;
  width: 5.875rem;
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  ${({ theme }) => css`
    color: ${theme.colors.primary.hex};
    border: 1px solid ${theme.colors.primary.hex};
    border-radius: 0.5rem;

    :hover {
      background: ${theme.colors.primary.hex};
      color: #fff;
      cursor: pointer;
    }
  `};
`;

export const Order = styled(SelectOrder)<ActiveProps>`
  display: none;
  position: absolute;
  ${({ active }) =>
    active &&
    css`
      display: flex;
    `}
`;
