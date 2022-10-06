import { useMutation, useQueryClient } from 'react-query';

import { requestCreateReply } from '@/api/reply';

export default function useCreateReplyMutation(
  postId: string | number,
  replyId?: string | number,
) {
  const queryClient = useQueryClient();
  const mutations = useMutation(requestCreateReply(postId, replyId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['reply', postId]);
    },
  });
  return mutations;
}
