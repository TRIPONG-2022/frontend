import React from 'react';

import PostList from '@/components/post/PostList';
import Pagination from '@/components/shared/Pagination';
import useMyPageFetchData from '@/hooks/useMyPageFetchData';
import MainLayout from '@/layouts/MainLayout';
import MyPageLayout from '@/layouts/MyPageLayout';
import MyPagePostLayout from '@/layouts/MyPagePostLayout';

const MyPageLikesPage = () => {
  const [{ data }, page, movePage] = useMyPageFetchData<'post'>({
    type: 'like',
    size: 10,
  });

  return (
    <MainLayout>
      <MyPageLayout>
        <MyPagePostLayout
          contentTitle={`총 ${data?.total || 0}개의 글`}
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

export default MyPageLikesPage;
