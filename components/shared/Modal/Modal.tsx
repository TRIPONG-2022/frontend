import React from 'react';
import SVGIcon from '../SVGIcon';

import type { ModalSize } from './Modal.styled';
import * as Styled from './Modal.styled';
interface ChildrenProps {
  children: React.ReactNode;
}

const Title = ({ children }: ChildrenProps) => {
  return (
    <>
      <Styled.ModalTitle>{children}</Styled.ModalTitle>
    </>
  );
};

const Description = ({ children }: ChildrenProps) => {
  return (
    <>
      <Styled.DescriptionText>{children}</Styled.DescriptionText>
    </>
  );
};

const BtnContainer = ({ children }: ChildrenProps) => {
  return <Styled.BtnContainer>{children}</Styled.BtnContainer>;
};

interface TwoBtnContainerProps {
  leftBtn: React.ReactNode;
  rightBtn: React.ReactNode;
}

const TwoBtnContainer = ({ leftBtn, rightBtn }: TwoBtnContainerProps) => {
  return (
    <Styled.TwoBtnContainer>
      <div>{leftBtn}</div>
      <div>{rightBtn}</div>
    </Styled.TwoBtnContainer>
  );
};

interface ModalProps {
  isModal: boolean;
  close: () => void;
  size?: ModalSize;
  children?: React.ReactNode;
}

const Modal = ({ isModal, close, children, size = 'md' }: ModalProps) => {
  return (
    <>
      {isModal && (
        <Styled.ModalContainer>
          <Styled.ModalBackdrop onClick={close} />
          <Styled.ModalWrapper $size={size}>
            <Styled.ExitButton onClick={close}>
              <SVGIcon icon="CloseIcon" size={20} />
            </Styled.ExitButton>
            {children}
          </Styled.ModalWrapper>
        </Styled.ModalContainer>
      )}
    </>
  );
};

Modal.Title = Title;
Modal.Description = Description;
Modal.BtnContainer = BtnContainer;
Modal.TwoBtnContainer = TwoBtnContainer;

export default Modal;
