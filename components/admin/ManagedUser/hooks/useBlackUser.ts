import { useMutation, useQueryClient } from 'react-query';

import { blackUser } from '@/api/admin';

function useBlackUser() {
  const queryClient = useQueryClient();

  const query = useMutation((userId: number) => blackUser(userId), {
    onSuccess: async () => {
      queryClient.invalidateQueries('userList');
    },
  });

  return query;
}

export default useBlackUser;
