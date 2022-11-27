import React, { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';

import GNB from '@/layouts/GNB';
import Footer from '@/layouts/Footer';
import ResponsiveContainer from '@/components/shared/ResponsiveContainer';
import { AppState } from '@/store/index';

import * as Styled from './MainLayout.styled';
import SearchBar from '@/components/searchbar/SearchBar';

interface MainLayoutProps {
  children: ReactNode;
  fullWidth?: boolean;
}

function MainLayout({ children, fullWidth }: MainLayoutProps) {
  const isSearch = useSelector(({ search }: AppState) => search.isSearch);

  useEffect(() => {
    console.log(isSearch);
  }, [isSearch]);
  return (
    <>
      {!isSearch && <GNB />}
      {isSearch && <SearchBar />}
      <Styled.MainContainer isSearch={isSearch}>
        {fullWidth ? (
          <>{children}</>
        ) : (
          <ResponsiveContainer>{children}</ResponsiveContainer>
        )}
      </Styled.MainContainer>
      <Footer />
    </>
  );
}

export default MainLayout;
