import React, { useCallback } from 'react';
import ko from 'date-fns/locale/ko';
import SVGIcon from '../SVGIcon';
import ReactDatePicker, {
  registerLocale,
  ReactDatePickerCustomHeaderProps,
} from 'react-datepicker';
import * as Styled from './DatePicker.styled';

registerLocale('ko', ko);

const DatePickerHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: ReactDatePickerCustomHeaderProps) => {
  return (
    <Styled.DatePickerHeaderContainer>
      <Styled.DatePickerHeaderCurrentDate>
        {date.getFullYear()}년 {date.getMonth() + 1}월
      </Styled.DatePickerHeaderCurrentDate>
      <div>
        <Styled.DatePickerHeaderUtilButton
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
        >
          <SVGIcon icon="ChevronLeftIcon" size="12" />
        </Styled.DatePickerHeaderUtilButton>
        <Styled.DatePickerHeaderUtilButton
          onClick={increaseMonth}
          disabled={nextMonthButtonDisabled}
        >
          <SVGIcon icon="ChevronRightIcon" size="12" />
        </Styled.DatePickerHeaderUtilButton>
      </div>
    </Styled.DatePickerHeaderContainer>
  );
};

const DatePickerInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <Styled.DatePickerInputContainer>
      <Styled.DatePickerInput {...props} ref={ref} />
    </Styled.DatePickerInputContainer>
  );
});

DatePickerInput.displayName = 'DatePickerInput';

interface DatePickerProps {
  date: Date;
  onChange: (date: Date) => void;
  dateFormat?: string;
  selectsStart?: boolean;
  selectsEnd?: boolean;
  startDate?: Date;
  endDate?: Date;
  minDate?: Date;
}

export default function DatePicker({
  date,
  onChange,
  dateFormat = 'yyyy/MM/dd',
  ...datePickerProps
}: DatePickerProps) {
  const handleChangeDate = useCallback(
    (date: Date | null) => {
      if (date) {
        onChange(date);
      }
    },
    [onChange],
  );

  return (
    <Styled.Container>
      <ReactDatePicker
        selected={date}
        onChange={handleChangeDate}
        dateFormat={dateFormat}
        renderCustomHeader={DatePickerHeader}
        customInput={<DatePickerInput />}
        locale="ko"
        {...datePickerProps}
      />
    </Styled.Container>
  );
}
