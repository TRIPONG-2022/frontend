import { useQuery, UseQueryOptions } from 'react-query';

import { Post, PostCategory } from '@/types/post';
import { requestGetPost } from '@/api/post';

export default function usePostQuery(
  category: PostCategory | null,
  postId: string | number | null,
  options?: Omit<UseQueryOptions<Post | null>, 'queryKey' | 'queryFn'>,
) {
  const queries = useQuery(
    ['post', category, postId],
    () => requestGetPost(category, postId),
    options,
  );
  return queries;
}
