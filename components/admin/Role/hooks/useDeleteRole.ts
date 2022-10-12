import { deleteRoles } from '@/api/admin';
import { useMutation, useQueryClient } from 'react-query';

function useDeleteRole() {
  const queryClient = useQueryClient();

  const query = useMutation((roleId: number) => deleteRoles(roleId), {
    onSuccess: () => {
      queryClient.invalidateQueries('roleList');
    },
  });

  return query;
}

export default useDeleteRole;
