import { blackUser } from '@/api/admin';
import { useMutation, useQueryClient } from 'react-query';

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
