import { AppState } from 'store';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import { getMyPagePosts } from '@/api/myPage';

export const useMyPageInfo = () => {
  const { startDate, endDate, category, order } = useSelector(
    ({ myPage }: AppState) => myPage,
  );

  const { data } = useQuery(
    ['useMyPageInfo', category, startDate, endDate, order],
    () => getMyPagePosts({ category, startDate, endDate }),
  );

  return data;
};
