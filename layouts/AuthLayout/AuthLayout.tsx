import React from 'react';
import * as Styled from './AuthLayout.styled';

interface AuthLayoutProps {
  title: string;
  description?: React.ReactNode | string;
  children?: React.ReactNode;
}

export default function AuthLayout({
  title,
  description,
  children,
}: AuthLayoutProps) {
  return (
    <Styled.OuterContainer>
      <Styled.BackgroundImage></Styled.BackgroundImage>
      <Styled.Container>
        <Styled.HeadingContainer>
          <Styled.Title>{title}</Styled.Title>
          {description && (
            <Styled.Description>{description}</Styled.Description>
          )}
        </Styled.HeadingContainer>
        {children}
      </Styled.Container>
    </Styled.OuterContainer>
  );
}
