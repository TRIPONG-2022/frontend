import { AppState } from 'store';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import { getMyPagePosts, getMyPageReplies } from '@/api/myPage';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface MyPageDataType {
  type: 'posts' | 'replies' | 'likes';
}

export const useMyPageInfo = ({ type }: MyPageDataType) => {
  const { user } = useSelector(({ user }: AppState) => user);
  const { startDate, endDate, category, order } = useSelector(
    ({ myPage }: AppState) => myPage,
  );
  const [page, setPage] = useState(0);

  const { data: postData } = useQuery(
    ['useMyPageInfo', category, startDate, endDate, order, page],
    ({ pageParam = 0 }) =>
      getMyPagePosts({ category, startDate, endDate }, page),
    {
      enabled: type === 'posts',
    },
  );

  console.log('pst', postData);

  const { data: repliesData } = useQuery(
    ['useMyPageInfo', user?.loginId, startDate, endDate],
    () => getMyPageReplies({ userId: user?.loginId, startDate, endDate }),
    {
      enabled: type === 'replies',
    },
  );

  return type === 'posts' ? postData : repliesData;
};
