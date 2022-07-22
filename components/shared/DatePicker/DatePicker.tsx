import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import moment from 'moment';

import * as Styled from './DatePicker.styled';
import SVGIcon from '../SVGIcon';

import 'react-calendar/dist/Calendar.css';

const Calender = dynamic(() => import('react-calendar'), {
  ssr: false,
});

interface DatePickerProps {
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

const DatePicker = ({ setDate }: DatePickerProps) => {
  const [value, setValue] = useState(new Date());
  const [active, setActive] = useState(false);

  useEffect(() => {
    setDate(value);
  }, [value, setDate]);

  return (
    <Styled.Container>
      <Styled.Button onClick={() => setActive(!active)}>
        {moment(value).format('YY-MM-DD')}
        <SVGIcon icon="CalendarIcon" />
      </Styled.Button>
      <Styled.DatePickerDiv active={active}>
        <Calender
          formatDay={(_, date) => moment(date).format('D')}
          value={value}
          onChange={setValue}
        />
      </Styled.DatePickerDiv>
    </Styled.Container>
  );
};

export default DatePicker;
