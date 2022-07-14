import MainLayout from '@/layouts/MainLayout';
import MyPageLayout from '@/layouts/MyPageLayout';
import React from 'react';

function A() {
  return (
    <MainLayout>
      <MyPageLayout>aaa</MyPageLayout>
    </MainLayout>
  );
}

export default A;
