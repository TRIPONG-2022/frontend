import { useMyPageInfo } from '@/hooks/useMyPageReply';
import MainLayout from '@/layouts/MainLayout';
import MyPageLayout from '@/layouts/MyPageLayout';
import PostLayout from '@/layouts/MyPagePostLayout';
import React, { useEffect } from 'react';

const MyPageLikesPage = () => {
  const aaa = useMyPageInfo();

  useEffect(() => {
    console.log(aaa);
  }, [aaa]);
  return (
    <MainLayout>
      <MyPageLayout>
        <PostLayout contentTitle={`총 ${5}개의 글`} existCategory>
          글이다
        </PostLayout>
      </MyPageLayout>
    </MainLayout>
  );
};

export default MyPageLikesPage;
