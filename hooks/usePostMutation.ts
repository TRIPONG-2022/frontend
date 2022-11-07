import { useMutation, useQueryClient } from 'react-query';

import { PostCategory } from '@/types/post';
import { requestCreateOrUpdatePost } from '@/api/post';

export default function usePostMutation(
  category: PostCategory | null,
  postId: string | number | null,
) {
  const queryClient = useQueryClient();
  const mutations = useMutation(
    ['update-post', category, postId],
    requestCreateOrUpdatePost(category, postId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['post', category, postId]);
      },
    },
  );
  return mutations;
}
