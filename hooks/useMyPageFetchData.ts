import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useQuery, UseQueryResult } from 'react-query';

import { Post } from '@/types/post';
import { Reply } from '@/types/reply';
import { AppState } from '@/store/index';
import myPageApi from '@/utils/my-page';
import { GetMyPageReturnData } from '@/types/my-page';

interface UseMyPageFetchDataOptions {
  size: number;
  type: 'post' | 'reply' | 'like';
}

type SetDataType<T extends 'post' | 'reply'> = T extends 'post' ? Post : Reply;

type UseMyPageFetchDataReturnType<T> = [
  UseQueryResult<GetMyPageReturnData<T>, unknown>,
  number,
  (n: number) => void,
];

const useMyPageFetchData = <T extends 'post' | 'reply'>({
  size,
  type,
}: UseMyPageFetchDataOptions): UseMyPageFetchDataReturnType<SetDataType<T>> => {
  const { startDate, endDate, category, order } = useSelector(
    ({ myPage }: AppState) => myPage,
  );

  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [category]);

  const queries = useQuery(
    ['useMyPageFetchData', category, startDate, endDate, order, page],
    () => myPageApi<T>({ type, category, startDate, endDate, page, size }),
  );

  const movePage = (n: number) => setPage(n);

  return [queries, page, movePage];
};

export default useMyPageFetchData;
