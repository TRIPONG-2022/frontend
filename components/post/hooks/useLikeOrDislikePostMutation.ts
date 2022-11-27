import { useMutation, useQueryClient } from 'react-query';
import { requestLikeOrDislikePost } from '@/api/post';
import { Post, PostCategory } from '@/types/post';

export default function useLikeOrDislikePostMutation(
  postId: number,
  postCategory: PostCategory,
) {
  const queryClient = useQueryClient();
  const postQueryKey = ['post', postCategory, postId];
  const mutations = useMutation(requestLikeOrDislikePost(postId), {
    async onMutate(isLike: boolean) {
      await queryClient.cancelQueries(postQueryKey);
      const previousData = queryClient.getQueryData<Post>(postQueryKey);

      queryClient.setQueryData<Post | undefined>(postQueryKey, (post) => {
        if (!post) return undefined;
        return {
          ...post,
          likeCount: isLike ? post.likeCount - 1 : post.likeCount + 1,
          isLike: !isLike,
        };
      });
      return { previousData };
    },
    async onError(_, __, context) {
      await queryClient.setQueryData(postQueryKey, context?.previousData);
    },
  });

  return mutations;
}
