import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  children: React.ReactNode;
}

const Description = ({ children }: TitleProps) => {
  return (
    <>
      <DescriptionText>{children}</DescriptionText>
    </>
  );
};

const DescriptionText = styled.p`
  margin-top: 1rem;
`;

export { Description };
