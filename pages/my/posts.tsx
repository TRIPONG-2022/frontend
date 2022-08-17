import React, { useEffect } from 'react';
import { NextPage } from 'next';

import MainLayout from '@/layouts/MainLayout';
import MyPageLayout from '@/layouts/MyPageLayout';
import PostLayout from '@/layouts/MyPagePostLayout';
import { useMyPageInfo } from '@/hooks/useMyPageInfo';

const MyPagePostsPage: NextPage = () => {
  const aaa = useMyPageInfo();

  useEffect(() => {
    console.log(aaa);
  }, [aaa]);

  return (
    <MainLayout>
      <MyPageLayout>
        <PostLayout contentTitle={`총 ${5}개의 글`} existCalendar existCategory>
          글이다
        </PostLayout>
      </MyPageLayout>
    </MainLayout>
  );
};

export default MyPagePostsPage;
