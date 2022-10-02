import { useMutation, useQueryClient } from 'react-query';

import { Reply } from '@/types/reply';
import { requestDeleteReply } from '@/api/reply';

export default function useDeleteReplyMutation(reply: Reply) {
  const queryClient = useQueryClient();
  const mutations = useMutation(requestDeleteReply, {
    onSuccess: () => {
      queryClient.invalidateQueries(['reply', reply.postId]);
    },
  });

  return mutations;
}
