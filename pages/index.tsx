import type { NextPage } from 'next';
import React, { useMemo } from 'react';
import MainLayout from '@/layouts/MainLayout';
import CardList from '@/components/shared/CardList';
import useScreenType from '@/hooks/useScreenType';

import { CARD_LIST } from '@/constants/cardData';

const HomePage: NextPage = () => {
  const ScreenObj = useScreenType();
  console.log(ScreenObj);
  const columnNumber = useMemo(
    () =>
      ScreenObj.isDesktop ? 3 : ScreenObj.isTablet ? 2 : ScreenObj.isMobile,
    [ScreenObj.isTablet, ScreenObj.isDesktop, ScreenObj.isMobile],
  );

  return (
    <MainLayout>
      <h1 className="">TRIPONG</h1>
      <CardList cardList={CARD_LIST} columnNumber={columnNumber} />
    </MainLayout>
  );
};

export default HomePage;
