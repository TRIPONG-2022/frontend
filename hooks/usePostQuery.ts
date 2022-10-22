import { useQuery } from 'react-query';

import { PostCategory } from '@/types/post';
import { requestGetPost } from '@/api/post';

export default function usePostQuery(
  category: PostCategory,
  postId: string | number,
) {
  const queries = useQuery(['post', category, postId], () =>
    requestGetPost(category, postId),
  );
  return queries;
}
