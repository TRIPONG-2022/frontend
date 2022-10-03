import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

import { getReportUsers } from '@/api/admin';
import { SearchUserParams } from '@/types/search-params';

interface ManagedUserInterface {
  content: {
    id: number;
    name: string;
    loginId: string;
    nickName: string;
    createdDate: string;
    roles: { roleName: string }[];
    reportType?: string;
    reporterName?: string;
  }[];
}

function useManagedBlackUserQuery(params: SearchUserParams) {
  const query = useQuery<ManagedUserInterface, AxiosError>(
    ['blackUserList', params.page],
    () => getReportUsers(params),
    {
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
    },
  );

  return query;
}
1;

export default useManagedBlackUserQuery;
