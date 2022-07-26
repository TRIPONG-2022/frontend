import type { NextPage } from 'next';
import React, { useMemo } from 'react';
import MainLayout from '@/layouts/MainLayout';
import CardList from '@/components/shared/CardList';
import useScreenType from '@/hooks/useScreenType';

import { CARD_LIST } from '@/constants/cardData';

const HomePage: NextPage = () => {
  const { isDesktop, isTablet, isMobile } = useScreenType();

  const columnNumber = useMemo(
    () => (isDesktop ? 3 : isTablet ? 2 : isMobile),
    [isTablet, isDesktop, isMobile],
  );

  return (
    <MainLayout>
      <h1 className="">TRIPONG</h1>
      <CardList cardList={CARD_LIST} columnNumber={columnNumber} />
    </MainLayout>
  );
};

export default HomePage;
