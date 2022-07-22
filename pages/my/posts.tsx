import React, { useEffect } from 'react';
import { NextPage } from 'next';

import MainLayout from '@/layouts/MainLayout';
import MyPageLayout from '@/layouts/MyPageLayout';
import PostLayout from '@/layouts/PostLayout';
import { useMyPageInfo } from '@/hooks/useMyPageInfo';

const MyPagePostsPage: NextPage = () => {
  const aaa = useMyPageInfo();

  useEffect(() => {
    console.log(aaa);
  }, [aaa]);

  return (
    <MainLayout>
      <MyPageLayout>
        <PostLayout existCalendar existCategory>
          글이다
        </PostLayout>
      </MyPageLayout>
    </MainLayout>
  );
};

export default MyPagePostsPage;
