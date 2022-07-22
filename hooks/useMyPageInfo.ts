import moment from 'moment';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export const useMyPageInfo = () => {
  const startDate = useSelector(({ profile }: RootState) => profile.startDate);
  const endDate = useSelector(({ profile }: RootState) => profile.endDate);
  const category = useSelector(({ profile }: RootState) => profile.category);
  const order = useSelector(({ profile }: RootState) => profile.order);

  return {
    startDate: moment(JSON.parse(startDate)).format('YY-MM-DD'),
    endDate: moment(JSON.parse(endDate)).format('YY-MM-DD'),
    category,
    order,
  };
};
