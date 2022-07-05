import { MouseEventHandler } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
}

const BtnContainers = ({ children }: ButtonProps) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 19rem;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
`;

export { BtnContainers };
