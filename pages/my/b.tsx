import MainLayout from '@/layouts/MainLayout';
import MyPageLayout from '@/layouts/MyPageLayout';
import { NextPage } from 'next';
import React from 'react';

const B: NextPage = () => {
  return (
    <MainLayout>
      <MyPageLayout>bbb</MyPageLayout>
    </MainLayout>
  );
};

export default B;
