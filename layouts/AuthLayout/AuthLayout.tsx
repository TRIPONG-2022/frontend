import React from 'react';
import * as Styled from './AuthLayout.styled';

interface AuthLayoutProps {
  title: string;
  children?: React.ReactNode;
}

export default function AuthLayout({ title, children }: AuthLayoutProps) {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      {children}
    </Styled.Container>
  );
}
