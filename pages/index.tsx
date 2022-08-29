import type { NextPage } from 'next';
import React, { useMemo } from 'react';
import MainLayout from '@/layouts/MainLayout';
import useScreenType from '@/hooks/useScreenType';
import { getPosts } from '@/api/post';
import { useEffect } from 'react';
import CardList from '@/components/shared/CardList';

const HomePage: NextPage = () => {
  const { isDesktop, isTablet, isMobile } = useScreenType();

  interface ICard {
    id: number;
    author: string;
    budget: number;
    category: string;
    title: string;
    content: string;
    curHeadCount: number;
    totalHeadCount: number;
    startDate: string;
    endDate: string;
    thumbnail: string;
    images: string[];
    tags: string[];
    likeCount: number;
    viewCount: number;
    latitude: number;
    longitude: number;
  }
  const obj: ICard[] = [
    {
      id: 0,
      author: '작성자',
      budget: 0,
      category: 'board',
      title: '여행모집',
      content: '같이 여행가실 분 0원 구해오세요',
      curHeadCount: 0,
      totalHeadCount: 4,
      startDate: '2022-08-29',
      endDate: '2022-09-01',
      thumbnail:
        'https://item.kakaocdn.net/do/c9230634b95167d3f4c177bb02c9f73d4022de826f725e10df604bf1b9725cfd',
      images: [
        'https://cdn.ppomppu.co.kr/zboard/data3/2020/0519/20200519183135_bubldmdv.png',
        'https://img.hankyung.com/photo/201903/AA.19067065.1.jpg',
      ],
      tags: ['태그1', '태그2'],
      likeCount: 0,
      viewCount: 0,
      latitude: 0,
      longitude: 0,
    },
    {
      id: 1,
      author: '김정민',
      budget: 0,
      category: 'board',
      title: '정민과 여행모집',
      content: '같이 여행가실 분 만원 구해오세요',
      curHeadCount: 0,
      totalHeadCount: 4,
      startDate: '2022-08-29',
      endDate: '2022-09-01',
      thumbnail: 'https://img.hankyung.com/photo/201907/AA.19998517.1.jpg',
      images: [
        'https://cdn.ppomppu.co.kr/zboard/data3/2020/0519/20200519183135_bubldmdv.png',
        'https://img.hankyung.com/photo/201903/AA.19067065.1.jpg',
      ],
      tags: ['태그1', '태그2'],
      likeCount: 0,
      viewCount: 0,
      latitude: 0,
      longitude: 0,
    },
    {
      id: 1,
      author: '진성진',
      budget: 0,
      category: 'board',
      title: '여행모집',
      content: '같이 여행가실 분 십만원 구해오세요',
      curHeadCount: 0,
      totalHeadCount: 4,
      startDate: '2022-08-29',
      endDate: '2022-09-01',
      thumbnail:
        'https://item.kakaocdn.net/do/d656a50c45c900cf6c99c3831c098df5f604e7b0e6900f9ac53a43965300eb9a',
      images: [
        'https://cdn.ppomppu.co.kr/zboard/data3/2020/0519/20200519183135_bubldmdv.png',
        'https://img.hankyung.com/photo/201903/AA.19067065.1.jpg',
      ],
      tags: ['태그1', '태그2'],
      likeCount: 0,
      viewCount: 0,
      latitude: 0,
      longitude: 0,
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
      <CardList columnNumber={columnNumber} cardList={obj} />
      <h1 className="">TRIPONG</h1>
    </MainLayout>
  );
};

export default HomePage;
