import GNB from '@/layouts/GNB';
import React, { ReactNode } from 'react';
import * as Styled from './MainLayout.styled';

interface MainLayoutProps {
  children: ReactNode;
  fullWidth?: boolean;
}

function MainLayout({ children, fullWidth }: MainLayoutProps) {
  return (
    <Styled.Container>
      <GNB isLogin={true} />
      <Styled.Body fullWidth={fullWidth}>{children}</Styled.Body>
      <Styled.Footer />
    </Styled.Container>
  );
}

export default MainLayout;
