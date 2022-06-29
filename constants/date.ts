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

// 지금 select의 특징??으로 defaultvalue가 맨첨에 들어가서 문제가 생김

// 다른 방법 Array.from({length:12}, (_, i) => i +1)
// 아직 Array from에 저 두번째 인자 역할 안찾아봄
