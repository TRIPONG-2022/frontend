import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import styled from 'styled-components';

import { Post } from '@/types/post';
import { requestGetRecentPostList } from '@/api/post';
import MainLayout from '@/layouts/MainLayout';
import PostList from '@/components/post/PostList';
import ResponsiveContainer from '@/components/shared/ResponsiveContainer';
import Banner from '@/components/home/Banner';
import Head from 'next/head';
import PostListSection from '@/components/home/PostListSection';

interface HomePageProps {
  review: Post[];
  board: Post[];
  qna: Post[];
  gathering: Post[];
}

const HomePage: NextPage<HomePageProps> = ({
  review,
  board,
  qna,
  gathering,
}) => {
  return (
    <>
      <Head>
        <title>TRIPONG</title>
      </Head>
      <MainLayout fullWidth>
        <Banner />
        <ResponsiveContainer>
          <PostListSection posts={review} title="후기, 리뷰" href="/posts" />
          <PostListSection posts={board} title="자유게시판" href="/posts" />
          <PostListSection posts={qna} title="Q & A" href="/posts" />
          <PostListSection
            posts={gathering}
            title="여행메이트 모집"
            href="/posts"
          />
        </ResponsiveContainer>
      </MainLayout>
    </>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const { review, board, qna, gathering } = await requestGetRecentPostList();

  return {
    props: {
      review,
      board,
      qna,
      gathering,
    },
  };
};
