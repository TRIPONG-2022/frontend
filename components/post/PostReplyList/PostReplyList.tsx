import React, { useCallback } from 'react';

import InView from '@/components/shared/InView';
import PostReplyItem from '@/components/post/PostReplyItem';
import useGetRepliesQuery from '@/components/reply/hooks/useGetRepliesQuery';
import PostReplyListContext from '../contexts/PostReplyListContext';

interface PostReplyListProps {
  postId: number | string;
  replyId?: number | string;
}

export default function PostReplyList({ postId, replyId }: PostReplyListProps) {
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
    <PostReplyListContext>
      <InView onChange={onChange} threshold={0.5}>
        <ul>
          {data?.pages.map((page) =>
            page.map((reply) => (
              <li key={reply.id}>
                <PostReplyItem reply={reply} />
              </li>
            )),
          )}
        </ul>
      </InView>
    </PostReplyListContext>
  );
}
