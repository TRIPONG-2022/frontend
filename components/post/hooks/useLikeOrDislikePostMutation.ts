import { useMutation, useQueryClient } from 'react-query';
import { requestLikeOrDislikePost } from '@/api/post';
import { Post, PostCategory } from '@/types/post';

export default function useLikeOrDislikePostMutation(
  postId: string | number,
  postCategory: PostCategory,
) {
  const queryClient = useQueryClient();
  const postQueryKey = ['post', postCategory, postId];

  const mutations = useMutation(requestLikeOrDislikePost(postId), {
    async onMutate(userLikePost: boolean) {
      await queryClient.cancelQueries(postQueryKey);
      const previousData = queryClient.getQueryData<Post>(postQueryKey);

      queryClient.setQueryData<Post | undefined>(postQueryKey, (post) => {
        if (!post) return undefined;
        return {
          ...post,
          likeCount: userLikePost ? post.likeCount - 1 : post.likeCount + 1,
        };
      });
      return { previousData };
    },
    onError(_, __, context) {
      queryClient.setQueryData(postQueryKey, context?.previousData);
    },
    onSettled() {
      queryClient.invalidateQueries(postQueryKey);
    },
  });

  return mutations;
}
