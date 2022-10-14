import { useInfiniteQuery } from 'react-query';
import { requestGetReplies } from '@/api/reply';
import { Reply } from '@/types/reply';

interface useGetRepliesQueryOptions {
  postId: string | number;
  replyId?: string | number;
  size?: number;
}
export default function useGetRepliesQuery({
  postId,
  replyId,
  size = 10,
}: useGetRepliesQueryOptions) {
  const queries = useInfiniteQuery<Reply[]>(
    ['reply', postId, replyId],
    ({ pageParam = 0 }) =>
      requestGetReplies(postId, replyId)({ page: pageParam, size }),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length === 0 ? false : allPages.length;
      },
    },
  );
  return queries;
}
