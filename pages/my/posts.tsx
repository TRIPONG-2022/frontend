import MainLayout from '@/layouts/MainLayout';
import MyPageLayout from '@/layouts/MyPageLayout';
import { NextPage } from 'next';
import React from 'react';

const MyPagePostsPage: NextPage = () => {
  return (
    <MainLayout>
      <MyPageLayout>내가 쓴글 페이지 입니다.</MyPageLayout>
    </MainLayout>
  );
};

export default MyPagePostsPage;
