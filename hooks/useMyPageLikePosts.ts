import { AppState } from 'store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useQuery, UseQueryResult } from 'react-query';

import { Post } from '@/types/post';
import { getMyPageLikePosts } from '@/api/myPage';

interface UseMyPageLikePostsOptions {
  size: number;
}

interface UseMyPageLikePostsData {
  total: number;
  data: Post[];
}

const useMyPageLikePosts = ({
  size,
}: UseMyPageLikePostsOptions): [
  UseQueryResult<UseMyPageLikePostsData, unknown>,
  number,
  (n: number) => void,
] => {
  const { category } = useSelector(({ myPage }: AppState) => myPage);

  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [category]);

  const queries = useQuery<UseMyPageLikePostsData>(
    ['useMyPageLikePosts', category, page],
    () => getMyPageLikePosts({ category, page, size }),
  );

  const movePage = (n: number) => setPage(n);

  return [queries, page, movePage];
};

export default useMyPageLikePosts;
