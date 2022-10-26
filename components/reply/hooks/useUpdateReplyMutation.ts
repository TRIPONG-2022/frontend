import { InfiniteData, useMutation, useQueryClient } from 'react-query';

import { Reply } from '@/types/reply';
import { requestUpdateReply } from '@/api/reply';

export default function useUpdateReplyMutation(reply: Reply) {
  const queryClient = useQueryClient();
  const queryKey = reply.parentReply
    ? ['reply', reply.postId, reply.parentReply]
    : ['reply', reply.postId];
  const mutations = useMutation(requestUpdateReply(reply), {
    onMutate: async (content) => {
      await queryClient.cancelQueries(queryKey);
      const previousData = queryClient.getQueryData<InfiniteData<Reply[]>>([
        'reply',
        reply.postId,
      ]);
      queryClient.setQueryData<InfiniteData<Reply[]>>(queryKey, (data) => ({
        pages:
          data?.pages.map((page) =>
            page.map((replyData) =>
              replyData.id === reply.id ? { ...replyData, content } : replyData,
            ),
          ) || [],
        pageParams: data?.pageParams || [],
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
