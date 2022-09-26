import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { getRoles } from '@/api/admin';
import { RoleType } from '@/types/role';

function useRoleQuery() {
  const query = useQuery<RoleType[], AxiosError>('roleList', () => getRoles(), {
    staleTime: 50000,
    onError: (err: AxiosError) => {
      if (err.response?.status) {
        if (500 <= err.response?.status) {
          console.log('서버에러');
        }
        if (400 <= err.response?.status) {
          console.log('로그인 실패하였습니다.');
        }
      }
    },
  });

  return query;
}

export default useRoleQuery;
