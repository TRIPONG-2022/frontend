import { NextPage } from 'next';
import React from 'react';

import useMyPagePosts from '@/hooks/useMyPagePosts';
import MainLayout from '@/layouts/MainLayout';
import MyPageLayout from '@/layouts/MyPageLayout';
import MyPagePostLayout from '@/layouts/MyPagePostLayout';
import PostList from '@/components/post/PostList';
import Pagination from '@/components/shared/Pagination';

const MyPagePostsPage: NextPage = () => {
  const [{ data }, page, movePage] = useMyPagePosts({ size: 10 });

  return (
    <MainLayout>
      <MyPageLayout>
        <MyPagePostLayout
          contentTitle={`총 ${data?.total || 0}개의 글`}
          existCalendar
          existCategory
        >
          {data ? <PostList posts={data.data} /> : <p>로딩 중....</p>}
          <Pagination
            movePage={movePage}
            page={page}
            total={(data && data.total) || 0}
            size={10}
          />
        </MyPagePostLayout>
      </MyPageLayout>
    </MainLayout>
  );
};

export default MyPagePostsPage;
