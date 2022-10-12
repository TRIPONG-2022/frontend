import { useMutation, useQueryClient } from 'react-query';

import { deleteReportPosts } from '@/api/admin';

function useDeletePost() {
  const queryClient = useQueryClient();

  const query = useMutation((postId: number) => deleteReportPosts(postId), {
    onSuccess: () => {
      queryClient.invalidateQueries('postList');
    },
  });

  return query;
}

export default useDeletePost;
