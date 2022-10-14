import React, { useCallback } from 'react';

import InView from '@/components/shared/InView';
import useGetRepliesQuery from '@/components/reply/hooks/useGetRepliesQuery';
import ReplyItem from '../ReplyItem';
import ReplyListContextProvider from '../contexts/ReplyListContext';

interface ReplyListProps {
  postId: number | string;
  replyId?: number | string;
}

export default function ReplyList({ postId, replyId }: ReplyListProps) {
  const { data, fetchNextPage, hasNextPage, isFetching } = useGetRepliesQuery({
    postId,
    replyId,
  });

  const onChange = useCallback(
    (isInview: boolean) => {
      if (isInview && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage],
  );

  return (
    <ReplyListContextProvider>
      <InView onChange={onChange} threshold={0.5}>
        <ul>
          {data?.pages.map((page) =>
            page.map((reply) => (
              <li key={reply.id}>
                <ReplyItem reply={reply} />
              </li>
            )),
          )}
        </ul>
      </InView>
    </ReplyListContextProvider>
  );
}
