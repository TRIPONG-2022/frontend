import { useState } from 'react';
import { AppState } from 'store';
import { useSelector } from 'react-redux';
import { useQuery, UseQueryResult } from 'react-query';

import { Reply } from '@/types/reply';
import { getMyPageReplies } from '@/api/myPage';

interface useMyPageRepliesOptions {
  size: number;
}

const useMyPageReplies = ({
  size,
}: useMyPageRepliesOptions): [
  UseQueryResult<
    {
      total: number;
      data: Reply[];
    },
    unknown
  >,
  number,
  (n: number) => void,
] => {
  const { user } = useSelector(({ user }: AppState) => user);
  const { startDate, endDate } = useSelector(({ myPage }: AppState) => myPage);
  const [page, setPage] = useState(0);

  const queries = useQuery<{ total: number; data: Reply[] }>(
    ['useMyPageReplies', startDate, endDate, page],
    () =>
      getMyPageReplies({
        userId: user?.loginId,
        startDate,
        endDate,
        page,
        size,
      }),
  );

  const movePage = (n: number) => setPage(n);

  return [queries, page, movePage];
};

export default useMyPageReplies;
