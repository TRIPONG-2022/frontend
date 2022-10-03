import { getUsers } from '@/api/admin';
import { useInfiniteQuery, useQuery } from 'react-query';
import { SearchUserParams } from '@/types/search-params';
import { AxiosError } from 'axios';

interface ManagedUserInterface {
  pageParams: string | undefined[];
  pages: UserData[];
}

interface UserData {
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
  totalPages: number;
  totalElements: number;
}

function useManagedUserQuery(params: SearchUserParams) {
  console.log(params);
  const query = useInfiniteQuery(
    'userList',
    ({ pageParam = 0 }) => {
      return getUsers({ ...params, page: pageParam });
    },
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.totalPages <= pages.length) return undefined;

        return pages.length;
      },

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

export default useManagedUserQuery;
