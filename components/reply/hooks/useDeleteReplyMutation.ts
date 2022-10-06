import { InfiniteData, useMutation, useQueryClient } from 'react-query';

import { Reply } from '@/types/reply';
import { requestDeleteReply } from '@/api/reply';

export default function useDeleteReplyMutation(reply: Reply) {
  const queryClient = useQueryClient();
  const mutations = useMutation(requestDeleteReply, {
    onMutate: async () => {
      await queryClient.cancelQueries(['reply', reply.postId]);
      const previousData = queryClient.getQueryData<InfiniteData<Reply[]>>([
        'reply',
        reply.postId,
      ]);
      queryClient.setQueryData<InfiniteData<Reply[]>>(
        ['reply', reply.postId],
        (data) => ({
          pages:
            data?.pages.map((page) =>
              page.filter((replyData) => replyData.id !== reply.id),
            ) ?? [],
          pageParams: data?.pageParams ?? [],
        }),
      );
      return { previousData };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(['reply', reply.postId], context?.previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['reply', reply.postId]);
    },
  });

  return mutations;
}
