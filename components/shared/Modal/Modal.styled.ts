import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background-color: #555;
  opacity: 0.5;
`;

export const ModalBox = styled.div`
  /* position: fixed;
  top: 50%;
  left: 50%; */

  z-index: 200;
  max-width: 32rem;
  min-width: 18.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* transform: translate(-50%, -50%); */
  padding: 2.5rem 1rem;
  @media (min-width: 768px) {
    padding: 2.5rem 3rem;
  }

  @media (min-width: 1280px) {
    padding: 2.5rem 5rem;
  }

  background-color: white;
  border-radius: 1rem;
`;

export const ExitButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const TitleText = styled.h1`
  font-size: 2rem;
`;

export const DescriptionText = styled.p`
  margin-top: 1rem;
`;

export const BtnContainer = styled.div`
  width: 40%;
`;

export const TwoBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
`;
