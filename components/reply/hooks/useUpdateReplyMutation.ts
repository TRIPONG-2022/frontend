import { InfiniteData, useMutation, useQueryClient } from 'react-query';

import { Reply } from '@/types/reply';
import { requestUpdateReply } from '@/api/reply';

export default function useUpdateReplyMutation(reply: Reply) {
  const queryClient = useQueryClient();
  const mutations = useMutation(requestUpdateReply(reply), {
    onMutate: async (content) => {
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
              page.map((replyData) =>
                replyData.id === reply.id
                  ? { ...replyData, content }
                  : replyData,
              ),
            ) || [],
          pageParams: data?.pageParams || [],
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
