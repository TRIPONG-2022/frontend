import { useInfiniteQuery } from 'react-query';
import { AxiosError } from 'axios';

import { getReportPosts } from '@/api/admin';
import { SearchParams } from '@/types/search-params';

function useManagedReportPostQuery(params: SearchParams) {
  const query = useInfiniteQuery(
    'postList',
    ({ pageParam = 0 }) => getReportPosts({ ...params, page: pageParam }),
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

export default useManagedReportPostQuery;
