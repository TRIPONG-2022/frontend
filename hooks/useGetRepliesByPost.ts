import { useInfiniteQuery } from 'react-query';
import { requestGetRepliesByPost } from '@/api/reply';

export default function useGetRepliesByPost(
  postId: string | number,
  size = 10,
) {
  const queries = useInfiniteQuery(
    ['reply', postId],
    ({ pageParam = 0 }) =>
      requestGetRepliesByPost(postId, { page: pageParam, size }),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length === 0 ? false : allPages.length;
      },
    },
  );
  return queries;
}
