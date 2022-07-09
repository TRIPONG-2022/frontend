import React, { useCallback } from 'react';
import SVGIcon from '@/components/shared/SVGIcon';
import InputContainer from '../InputContainer';
import DatePicker from '@/components/shared/DatePicker';

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
    <InputContainer>
      <label>모집기간</label>
      <DatePicker
        date={startDate}
        onChange={handleChangeStartDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
      />
      <SVGIcon icon="ArrowRightIcon" />
      <DatePicker
        date={endDate}
        onChange={onChangeEndDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </InputContainer>
  );
}
