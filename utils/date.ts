import { format } from 'date-fns';

export const getCurrentYear = () => new Date().getFullYear();

export const getCurrentMonth = () => new Date().getMonth() + 1;

export const getCurrentDay = () => new Date().getDate();

export const getOptionYears = (currentYear: number, rangeYear: number) =>
  new Array(currentYear - (currentYear - rangeYear))
    .fill(undefined)
    .map((_, i) => {
      return {
        value: currentYear - i,
        label: currentYear - i + '년',
      };
    });

export const getOptionMonths = new Array(12).fill(undefined).map((_, i) => {
  return {
    value: i + 1,
    label: i + 1 + '월',
  };
});

export const LastDay = (year: number, month: number) => {
  return new Date(year, month, 0).getDate();
};

export const getOptionDays = (year?: number, month = 1) => {
  return new Array(LastDay(year ?? getCurrentYear(), month))
    .fill(undefined)
    .map((_, i) => {
      return {
        value: i + 1,
        label: i + 1 + '일',
      };
    });
};

export const getBirthDate = (year: number, month: number, day: number) => {
  if (year || month || day) {
    const madeMonth = month > 9 ? month : '0' + month;
    const madeDay = day > 9 ? day : '0' + day;
    return `${year}-${madeMonth}-${madeDay}`;
  }
  return null;
};

export const getGatheringDate = (
  startDateString?: string,
  endDateString?: string,
) => {
  const currentDate = new Date();
  const startDate = startDateString ? new Date(startDateString) : new Date();
  const endDate = endDateString ? new Date(endDateString) : new Date();

  const isCurrentYear = startDate.getFullYear() === currentDate.getFullYear();
  const isSameYear = startDate.getFullYear() === endDate.getFullYear();
  const isSameMonth = startDate.getMonth() === endDate.getMonth();

  const startDateFormat = isCurrentYear ? 'MM월 dd일' : 'yyyy년 MM월 dd일';
  const endDateFormat = !isSameYear
    ? 'yyyy년 MM월 dd일'
    : !isSameMonth
    ? 'MM월 dd일'
    : 'dd일';
  return `${format(startDate, startDateFormat)} ~ ${format(
    endDate,
    endDateFormat,
  )}`;
};

const ONE_MINUTE = 1000 * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_MONTH = ONE_DAY * 30;
const ONE_YEAR = ONE_DAY * 365;

export const timeDiff = (startDate: Date, endDate: Date) => {
  return endDate.getTime() - startDate.getTime();
};

export const elapsedTime = (date: string | Date) => {
  const diff = timeDiff(new Date(date), new Date());

  const times = [
    { label: '년', ms: ONE_YEAR },
    { label: '개월', ms: ONE_MONTH },
    { label: '일', ms: ONE_DAY },
    { label: '시간', ms: ONE_HOUR },
    { label: '분', ms: ONE_MINUTE },
  ];

  for (const { label, ms } of times) {
    const betweenTime = Math.floor(diff / ms);

    if (0 < betweenTime) {
      return `${betweenTime}${label} 전`;
    }
  }

  return '방금 전';
};
