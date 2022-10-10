import { useInfiniteQuery } from 'react-query';
import { AxiosError } from 'axios';

import { SearchParams } from '@/types/search-params';
import { getUsers } from '@/api/admin';

function useManagedUserQuery(params: SearchParams) {
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
