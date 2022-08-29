import type { NextPage } from 'next';
import React, { useMemo } from 'react';
import MainLayout from '@/layouts/MainLayout';
import useScreenType from '@/hooks/useScreenType';
import { getPosts } from '@/api/post';
import { useEffect } from 'react';

const HomePage: NextPage = () => {
  const { isDesktop, isTablet, isMobile } = useScreenType();

  interface PostType {
    title: string;
    content: string;
    category: string;
    tags: any;
    latitude: string;
    longitude: string;
    startDate: string;
    endDate: string;
    totalHeadCount: number;
  }

  const obj = [
    {
      title: '제목',
      content: '내용',
      category: 'board',
      tags: ['태그1'],
      startDate: '2022-08-07',
      endDate: '2022-08-07',
      totalHeadCount: 4,
    },
    {
      title: '제목',
      content: '내용',
      category: 'board',
      tags: ['태그1'],
      startDate: '2022-08-07',
      endDate: '2022-08-07',
      totalHeadCount: 4,
    },
  ];

  useEffect(() => {
    getPosts();
  }, []);

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
