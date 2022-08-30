import type { NextPage } from 'next';
import React, { useMemo } from 'react';
import MainLayout from '@/layouts/MainLayout';
import useScreenType from '@/hooks/useScreenType';
import { getPosts } from '@/api/post';
import { useEffect } from 'react';
import CardList from '@/components/shared/CardList';
import { POSTOBJ } from '@/constants/posts';

const HomePage: NextPage = () => {
  const { isDesktop, isTablet, isMobile } = useScreenType();

  useEffect(() => {
    getPosts();
  }, []);

  const columnNumber = useMemo(
    () => (isDesktop ? 3 : isTablet ? 2 : isMobile),
    [isTablet, isDesktop, isMobile],
  );

  return (
    <MainLayout>
      <CardList columnNumber={columnNumber} cardList={POSTOBJ} />
      <h1 className="">TRIPONG</h1>
    </MainLayout>
  );
};

export default HomePage;
