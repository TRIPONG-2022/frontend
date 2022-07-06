import React from 'react';
import * as Styled from './Modal.styled';
import styled from 'styled-components';
import SVGIcon from '../SVGIcon';

interface ChildrenProps {
  children: React.ReactNode;
}

const Title = ({ children }: ChildrenProps) => {
  return (
    <>
      <Styled.TitleText>{children}</Styled.TitleText>
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

const TwoBtnContainer = ({ children }: ChildrenProps) => {
  return <Styled.TwoBtnContainer>{children}</Styled.TwoBtnContainer>;
};

interface ModalProps {
  isModal: boolean;
  close: any;
  children: React.ReactNode;
}

const ModalComponent = ({ isModal, close, children }: ModalProps) => {
  return (
    <>
      {isModal && (
        <Container>
          <Styled.Background onClick={() => close()} />
          <Styled.ModalBox>
            <Styled.ExitButton onClick={() => close()}>
              <SVGIcon icon="DeleteIcon" />
            </Styled.ExitButton>
            {children}
          </Styled.ModalBox>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

ModalComponent.Title = Title;
ModalComponent.Description = Description;
ModalComponent.BtnContainer = BtnContainer;
ModalComponent.BtnContainers = TwoBtnContainer;

export default ModalComponent;
