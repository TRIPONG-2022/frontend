import { useMutation, useQueryClient } from 'react-query';

import { Reply } from '@/types/reply';
import { requestUpdateReply } from '@/api/reply';

export default function useUpdateReplyMutation(reply: Reply) {
  const queryClient = useQueryClient();
  const mutations = useMutation(requestUpdateReply(reply), {
    onSuccess: () => {
      queryClient.invalidateQueries(['reply', reply.postId]);
    },
  });

  return mutations;
}
