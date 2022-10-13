import moment from 'moment';
import { getMyPagePosts } from '@/api/myPage';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { AppState } from 'store';

export const useMyPageInfo = () => {
  const { startDate, endDate, order } = useSelector(
    ({ myPage }: AppState) => myPage,
  );

  // useQuery(['useMyPageInfo', 'all', startDate, endDate, order], () =>
  //   getMyPagePosts({ category: 'all', startDate, endDate }),
  // );

  return {
    startDate,
    endDate,
    // category,
    order,
  };
};
