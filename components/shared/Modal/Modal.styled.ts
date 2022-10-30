import styled, { css } from 'styled-components';
import { Z_INDEX } from '@/styles/z-index';
import { SCREEN_TABLET } from '@/styles/screen';

const ModalSizeStyles = {
  xs: css`
    max-width: 20rem;
  `,
  sm: css`
    max-width: 24rem;
  `,
  md: css`
    max-width: 28rem;
  `,
  lg: css`
    max-width: 32rem;
  `,
  xl: css`
    max-width: 36rem;
  `,
};

export type ModalSize = keyof typeof ModalSizeStyles;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 5rem 2rem;
  z-index: ${Z_INDEX.MODAL};
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${Z_INDEX.MODAL_BACKDROP};
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalWrapper = styled.div<{ $size: ModalSize }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  z-index: ${Z_INDEX.MODAL};

  ${SCREEN_TABLET} {
    top: initial;
    transform: translateX(-50%);
  }

  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);

  ${({ $size }) => ModalSizeStyles[$size]};
`;

export const ModalTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

export const ExitButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const DescriptionText = styled.p`
  font-size: 1rem;
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 0.5rem;

  margin-top: 1.5rem;
`;

export const TwoBtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  column-gap: 1rem;
  margin-top: 1.5rem;

  & > div {
    width: 100%;
  }
`;
