import styled from 'styled-components';

export const OuterContainer = styled.div`
  padding: 3rem 0;

  @media (min-width: 768px) {
    padding: 5rem 0;
  }

  @media (min-width: 1280px) {
    padding: 10rem 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
  padding: 0 1.25rem;
  background-color: #ffffff;
  border-radius: 1rem;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

export const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1000;
  background-color: #ffffff;

  @media (min-width: 768px) {
    background-image: url('/images/background.jpg');
    background-size: cover;
    background-attachment: fixed;
  }
`;

export const HeadingContainer = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 1.25rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray[400]};
`;
