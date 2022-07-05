import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <>
      <TitleText>{children}</TitleText>
    </>
  );
};

const TitleText = styled.h1`
  font-size: 2rem;
`;

export { Title };
