import moment from 'moment';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SVGIcon from '@/components/shared/SVGIcon';
import ProfileDatePicker from '@/components/shared/ProfileDatePicker';
import { AppState } from '@/store/index';
import { setSendEndDate, setSendStartDate } from '@/store/slice/myPageSlice';

import * as Styled from './ProfileDateRangeInput.styled';

export default function DateRangeInput() {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector(({ myPage }: AppState) => myPage);

  const handleChangeStartDate = useCallback(
    (date: Date) => {
      dispatch(setSendStartDate(moment(date).format('YYYY-MM-DD')));
      if (moment(endDate).toDate() < date) {
        dispatch(setSendEndDate(moment(date).format('YYYY-MM-DD')));
      }
    },
    [dispatch, endDate],
  );

  const handleChangeEndDate = useCallback(
    (date: Date) => {
      dispatch(setSendEndDate(moment(date).format('YYYY-MM-DD')));
    },
    [dispatch],
  );

  return (
    <Styled.Container>
      <ProfileDatePicker
        date={moment(startDate).toDate()}
        onChange={handleChangeStartDate}
        selectsStart
        startDate={moment(startDate).toDate()}
        endDate={moment(endDate).toDate()}
      />
      <SVGIcon icon="SubtractLineIcon" />
      <ProfileDatePicker
        date={moment(endDate).toDate()}
        onChange={handleChangeEndDate}
        selectsEnd
        startDate={moment(startDate).toDate()}
        endDate={moment(endDate).endOf('d').toDate()}
        minDate={moment(startDate).toDate()}
      />
    </Styled.Container>
  );
}
