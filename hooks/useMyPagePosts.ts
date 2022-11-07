import { AppState } from 'store';
import { useQuery, UseQueryResult } from 'react-query';
import { useSelector } from 'react-redux';

import { getMyPagePosts } from '@/api/myPage';
import { Post } from '@/types/post';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface useMyPagePostsOptions {
  size: number;
}

const useMyPagePosts = ({
  size,
}: useMyPagePostsOptions): [
  UseQueryResult<
    {
      total: number;
      data: Post[];
    },
    unknown
  >,
  number,
  Dispatch<SetStateAction<number>>,
] => {
  const { startDate, endDate, category, order } = useSelector(
    ({ myPage }: AppState) => myPage,
  );

  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [category]);

  const queries = useQuery<{ total: number; data: Post[] }>(
    ['useMyPageInfo', category, startDate, endDate, order, page],
    () => getMyPagePosts({ category, startDate, endDate, page, size }),
  );

  return [queries, page, setPage];
};

export default useMyPagePosts;
