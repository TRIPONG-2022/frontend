import type { NextPage } from 'next';
import React, { useMemo } from 'react';
import MainLayout from '@/layouts/MainLayout';
import useScreenType from '@/hooks/useScreenType';

const HomePage: NextPage = () => {
  const { isDesktop, isTablet, isMobile } = useScreenType();

  const columnNumber = useMemo(
    () => (isDesktop ? 3 : isTablet ? 2 : isMobile),
    [isTablet, isDesktop, isMobile],
  );

  return (
    <MainLayout>
      <h1 className="">TRIPONG</h1>
    </MainLayout>
  );
};

export default HomePage;
