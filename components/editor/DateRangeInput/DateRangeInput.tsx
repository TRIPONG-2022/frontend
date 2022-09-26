import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import InputContainer from '../InputContainer';
import SVGIcon from '@/components/shared/SVGIcon';
import DatePicker from '@/components/shared/DatePicker';
import { PostEditorSchema } from '@/constants/schema';

export default function DateRangeInput() {
  const { control, setValue } = useFormContext<PostEditorSchema>();
  const startDate = useWatch({ name: 'startDate', control });
  const endDate = useWatch({ name: 'endDate', control });

  const handleChangeStartDate = (date: Date) => {
    setValue('startDate', date);
    if (endDate < date) {
      setValue('endDate', date);
    }
  };

  const handleChangeEndDate = (date: Date) => {
    setValue('endDate', date);
  };

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
        onChange={handleChangeEndDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </InputContainer>
  );
}
