import React from 'react';
import { NextPage } from 'next';

import { Reply } from '@/types/reply';
import MainLayout from '@/layouts/MainLayout';
import PostLayout from '@/layouts/MyPagePostLayout';
import MyPageLayout from '@/layouts/MyPageLayout';
import ReplyItem from '@/components/reply/ReplyItem';
import Pagination from '@/components/shared/Pagination';
import useMyPageFetchData from '@/hooks/useMyPageFetchData';

const MyPageRepliesPage: NextPage = () => {
  const [{ data }, page, movePage] = useMyPageFetchData<'reply'>({
    type: 'reply',
    size: 10,
  });

  if (!data) return null;

  return (
    <MainLayout>
      <MyPageLayout>
        <PostLayout contentTitle={`총 ${data.total}개의 댓글`} existCalendar>
          {data &&
            data.data.map((reply: Reply, idx) => (
              <ReplyItem key={idx} reply={reply}>
                <ReplyItem.Content />
              </ReplyItem>
            ))}
          <Pagination
            movePage={movePage}
            page={page}
            total={data.total}
            size={10}
          />
        </PostLayout>
      </MyPageLayout>
    </MainLayout>
  );
};

export default MyPageRepliesPage;
