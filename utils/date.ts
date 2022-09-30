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
