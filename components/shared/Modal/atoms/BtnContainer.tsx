import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
}

const BtnContainer = ({ children }: ButtonProps) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 7rem;
`;

export { BtnContainer };
