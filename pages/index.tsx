import type { NextPage } from 'next';
import React, { useMemo } from 'react';
import MainLayout from '@/layouts/MainLayout';
import CardList from '@/components/shared/CardList';
import useScreenType from '@/hooks/useScreenType';

const HomePage: NextPage = () => {
  const { isDesktop, isTablet, isMobile } = useScreenType();

  const columnNumber = useMemo(
    () => (isDesktop ? 3 : isTablet ? 2 : isMobile),
    [isTablet, isDesktop, isMobile],
  );

  const CARD_LIST = [
    {
      id: 2,
      category: 'board',
      thumbnail:
        'https://www.yeongnam.com/mnt/file/201809/20180914.010370820500001i1.jpg',
      title: '여행',
      description: '여행을 가고싶은 분들 모집합니다.',
      tag: ['태그1', '태그2', '태그3', '내가 이렇게 태그를 많이 달았다.'],
      userName: 'username',
      userImg:
        'https://i.pinimg.com/236x/e2/b7/da/e2b7da6bc749ba2d7ebdfda28fac6009.jpg',
      like: 23,
      location: '제주도',
      totalHeadCount: 1,
      endDate: '2022-08-30',
    },
  ];

  return (
    <MainLayout>
      <h1 className="">TRIPONG</h1>
      <CardList cardList={CARD_LIST} columnNumber={columnNumber} />
    </MainLayout>
  );
};

export default HomePage;
