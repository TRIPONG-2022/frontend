import { NextPage } from 'next';
import React, { useEffect } from 'react';

import MainLayout from '@/layouts/MainLayout';
import MyPageLayout from '@/layouts/MyPageLayout';
import MyPagePostLayout from '@/layouts/MyPagePostLayout';
import PostList from '@/components/post/PostList';
import useMyPagePosts from '@/hooks/useMyPagePosts';
import Pagination from '@/components/shared/Pagination';

const MyPagePostsPage: NextPage = () => {
  const [{ data }, page, movePage] = useMyPagePosts({ size: 5 });

  if (!data) {
    return (
      <MainLayout>
        <MyPageLayout>
          <MyPagePostLayout
            contentTitle={`총 개의 글`}
            existCalendar
            existCategory
          >
            <p>로딩 중....</p>
          </MyPagePostLayout>
        </MyPageLayout>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <MyPageLayout>
        <MyPagePostLayout
          contentTitle={`총 ${data.total || 0}개의 글`}
          existCalendar
          existCategory
        >
          {data.data && (
            <>
              <PostList posts={data.data} />
              <Pagination
                movePage={movePage}
                page={page}
                total={data.total}
                size={5}
              />
            </>
          )}
        </MyPagePostLayout>
      </MyPageLayout>
    </MainLayout>
  );
};

export default MyPagePostsPage;
