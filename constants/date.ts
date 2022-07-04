export const getCurrentYear = () => new Date().getFullYear();

export const years = (currentYear: number) =>
  new Array(currentYear - (currentYear - 100)).fill(undefined).map((_, i) => {
    return {
      value: currentYear - i,
      label: currentYear - i + '년',
    };
  });

export const months = new Array(12).fill(undefined).map((_, i) => {
  return {
    value: i + 1,
    label: i + 1 + '월',
  };
});

export const LastDay = (year: number, month: number) => {
  return new Date(year, month, 0).getDate();
};

export const days = (year: number, month: number) => {
  // if (typeof year == 'number' && typeof month == 'number') {
  return new Array(LastDay(year, month)).fill(undefined).map((_, i) => {
    return {
      value: i + 1,
      label: i + 1 + '일',
    };
  });
  // }
};
