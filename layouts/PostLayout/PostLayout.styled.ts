import { SCREEN_TABLET } from '@/styles/screen';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  ${SCREEN_TABLET} {
    padding-right: 1.75rem;
  }
`;

export const DatePickerWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
`;

export const Title = styled.p`
  width: 50%;
  font-size: 1.5rem;
  padding: 1rem 0.5rem;
`;

export const CategoryWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const PostWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 0.5rem;
  position: relative;
`;

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

export const ContentBox = styled.div`
  width: 100%;
  padding: 0.5rem;
`;
