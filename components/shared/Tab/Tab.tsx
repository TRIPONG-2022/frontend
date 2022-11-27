import React from 'react';
import * as Styled from './Tab.styled';

function Tab({ children }: { children: React.ReactNode }) {
  return <Styled.TabConatiner>{children}</Styled.TabConatiner>;
}

function TabButton({ children }: { children: React.ReactNode }) {
  return (
    <Styled.TabButtonContainer>
      <Styled.TabButton>{children}</Styled.TabButton>
    </Styled.TabButtonContainer>
  );
}

Tab.TabButton = TabButton;

export default Tab;
