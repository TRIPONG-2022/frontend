import { useMutation, useQueryClient } from 'react-query';

import { roleUser } from '@/api/admin';

function useChangeUserRole(selectedRoles: string[]) {
  const queryClient = useQueryClient();

  const query = useMutation(
    (userId: number) => roleUser(userId, selectedRoles),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('userList');
      },
    },
  );

  return query;
}

export default useChangeUserRole;
