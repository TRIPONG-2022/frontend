import { AppState } from 'store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useQuery, UseQueryResult } from 'react-query';

import { Post } from '@/types/post';
import { getMyPagePosts } from '@/api/myPage';

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
  (n: number) => void,
] => {
  const { startDate, endDate, category, order } = useSelector(
    ({ myPage }: AppState) => myPage,
  );

  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [category]);

  const queries = useQuery<{ total: number; data: Post[] }>(
    ['useMyPagePosts', category, startDate, endDate, order, page],
    () => getMyPagePosts({ category, startDate, endDate, page, size }),
  );

  const movePage = (n: number) => setPage(n);

  return [queries, page, movePage];
};

export default useMyPagePosts;
