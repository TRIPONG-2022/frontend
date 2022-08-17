import { NextPage } from 'next';
import React, { useEffect } from 'react';

import MainLayout from '@/layouts/MainLayout';
import MyPageLayout from '@/layouts/MyPageLayout';
import PostLayout from '@/layouts/MyPagePostLayout';
import { useMyPageInfo } from '@/hooks/useMyPageInfo';

const MyPageRepliesPage: NextPage = () => {
  const aaa = useMyPageInfo();

  useEffect(() => {
    console.log(aaa);
  }, [aaa]);

  return (
    <MainLayout>
      <MyPageLayout>
        <PostLayout contentTitle={`총 ${5}개의 글`} existCalendar>
          글이다
        </PostLayout>
      </MyPageLayout>
    </MainLayout>
  );
};

export default MyPageRepliesPage;
