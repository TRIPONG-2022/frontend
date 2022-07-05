import React from 'react';
import * as Styled from './Modal.styled';
import { Title, Description, BtnContainer, BtnContainers } from './atoms';
import styled from 'styled-components';
import SVGIcon from '../SVGIcon';

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

const Container = styled.div``;

ModalComponent.Title = Title;
ModalComponent.Description = Description;
ModalComponent.BtnContainer = BtnContainer;
ModalComponent.BtnContainers = BtnContainers;

export default ModalComponent;
