import { useMutation, useQueryClient } from 'react-query';

import { enrolRoles } from '@/api/admin';
import { AddRoleSchema } from '@/constants/schema';

function useAddRole() {
  const queryClient = useQueryClient();

  const query = useMutation((data: AddRoleSchema) => enrolRoles(data), {
    onSuccess: async () => {
      queryClient.invalidateQueries('roleList');
    },
  });

  return query;
}

export default useAddRole;
