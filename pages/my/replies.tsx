import { NextPage } from 'next';
import React, { useEffect } from 'react';

import MainLayout from '@/layouts/MainLayout';
import MyPageLayout from '@/layouts/MyPageLayout';
import PostLayout from '@/layouts/MyPagePostLayout';
import { useMyPageInfo } from '@/hooks/useMyPageInfo';
import ReplyList from '@/components/reply/ReplyList';
import ReplyItem from '@/components/reply/ReplyItem';

const MyPageRepliesPage: NextPage = () => {
  const repliesData = useMyPageInfo({ type: 'replies' });

  useEffect(() => {
    console.log(repliesData);
  }, [repliesData]);

  if (!repliesData) return null;

  return (
    <MainLayout>
      <MyPageLayout>
        <PostLayout
          contentTitle={`총 ${repliesData.length}개의 댓글`}
          existCalendar
        >
          {repliesData.map(({ postId, id }: any) => (
            <ReplyList key={id} postId={postId} />
          ))}
        </PostLayout>
      </MyPageLayout>
    </MainLayout>
  );
};

export default MyPageRepliesPage;
