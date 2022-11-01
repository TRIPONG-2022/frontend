import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';

import GNB from '@/layouts/GNB';
import { AppState } from '@/store/index';

import * as Styled from './MainLayout.styled';

interface MainLayoutProps {
  children: ReactNode;
  fullWidth?: boolean;
}

function MainLayout({ children, fullWidth }: MainLayoutProps) {
  const isSearch = useSelector(({ search }: AppState) => search.isSearch);

  return (
    <Styled.Container>
      <GNB />
      <Styled.Body fullWidth={fullWidth} isSearch={isSearch}>
        {children}
      </Styled.Body>
      <Styled.Footer />
    </Styled.Container>
  );
}

export default MainLayout;
