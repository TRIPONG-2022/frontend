import React from 'react';
import * as Styled from './AuthLayout.styled';
import SVGIcon from '@/components/shared/SVGIcon';

interface AuthLayoutProps {
  title: string;
  description?: string;
  errorMessage?: string;
  children?: React.ReactNode;
}

export default function AuthLayout({
  title,
  description,
  errorMessage,
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
          {errorMessage && (
            <Styled.AuthErrorMessage>
              <SVGIcon icon="ErrorWarningIcon" size={20} />
              {errorMessage}
            </Styled.AuthErrorMessage>
          )}
        </Styled.HeadingContainer>
        {children}
      </Styled.Container>
    </Styled.OuterContainer>
  );
}
