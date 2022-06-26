import React from 'react';
import * as Styled from './AuthLayout.styled';

interface AuthLayoutProps {
  title: string;
  children?: React.ReactNode;
}

export default function AuthLayout({ title, children }: AuthLayoutProps) {
  return (
    <Styled.OuterContainer>
      <Styled.BackgroundImage></Styled.BackgroundImage>
      <Styled.Container>
        <Styled.Title>{title}</Styled.Title>
        {children}
      </Styled.Container>
    </Styled.OuterContainer>
  );
}
