import React, { useCallback } from 'react';
import SVGIcon from '@/components/shared/SVGIcon';
import ProfileDatePicker from '@/components/shared/ProfileDatePicker';
import * as Styled from './ProfileDateRangeInput.styled';

interface DateRangeInputProps {
  startDate: Date;
  onChangeStartDate: (date: Date) => void;
  endDate: Date;
  onChangeEndDate: (date: Date) => void;
}

export default function DateRangeInput({
  startDate,
  endDate,
  onChangeStartDate,
  onChangeEndDate,
}: DateRangeInputProps) {
  const handleChangeStartDate = useCallback(
    (date: Date) => {
      onChangeStartDate(date);
      if (endDate < date) {
        onChangeEndDate(date);
      }
    },
    [endDate, onChangeEndDate, onChangeStartDate],
  );

  return (
    <Styled.Container>
      <ProfileDatePicker
        date={startDate}
        onChange={handleChangeStartDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <SVGIcon icon="SubtractLineIcon" />
      <ProfileDatePicker
        date={endDate}
        onChange={onChangeEndDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </Styled.Container>
  );
}
