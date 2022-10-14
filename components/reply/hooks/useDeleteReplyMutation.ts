import { InfiniteData, useMutation, useQueryClient } from 'react-query';

import { Reply } from '@/types/reply';
import { requestDeleteReply } from '@/api/reply';

export default function useDeleteReplyMutation(reply: Reply) {
  const queryClient = useQueryClient();
  const queryKey = reply.parentReply
    ? ['reply', reply.postId, reply.parentReply]
    : ['reply', reply.postId];
  const mutations = useMutation(requestDeleteReply, {
    onMutate: async () => {
      await queryClient.cancelQueries(queryKey);
      const previousData = queryClient.getQueryData<InfiniteData<Reply[]>>([
        'reply',
        reply.postId,
      ]);
      queryClient.setQueryData<InfiniteData<Reply[]>>(queryKey, (data) => ({
        pages:
          data?.pages.map((page) =>
            page.filter((replyData) => replyData.id !== reply.id),
          ) ?? [],
        pageParams: data?.pageParams ?? [],
      }));
      return { previousData };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(queryKey, context?.previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });

  return mutations;
}
