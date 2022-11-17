import MainLayout from '@/layouts/MainLayout';
import MyPageLayout from '@/layouts/MyPageLayout';
import MyPagePostLayout from '@/layouts/MyPagePostLayout';
import React from 'react';

const MyPageLikesPage = () => {
  return (
    <MainLayout>
      <MyPageLayout>
        <MyPagePostLayout contentTitle={`총 ${5}개의 글`} existCategory>
          글이다
        </MyPagePostLayout>
      </MyPageLayout>
    </MainLayout>
  );
};

export default MyPageLikesPage;
