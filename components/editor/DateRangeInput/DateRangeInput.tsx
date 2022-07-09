import DatePicker from '@/components/shared/DatePicker';
import SVGIcon from '@/components/shared/SVGIcon';
import React from 'react';
import * as Styled from './DateRangeInput.styled';

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
  return (
    <Styled.Container>
      <label>모집기간</label>
      <DatePicker
        date={startDate}
        onChange={onChangeStartDate}
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
    </Styled.Container>
  );
}
