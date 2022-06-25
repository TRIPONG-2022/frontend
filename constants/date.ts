export const CurrentYear = new Date().getFullYear();

export const years = Array(CurrentYear - (CurrentYear - 100))
  .fill('')
  .map((_, idx) => CurrentYear - idx);

export const months = new Array(12).fill(undefined).map((_, i) => i + 1);

export const LastDay = (year: number, month: number) => {
  return new Date(year, month, 0).getDate();
};

// useRef로 했을 때 예외처리인데 바꿔줘야지
export const days = (year: number | undefined, month: number | undefined) => {
  if (!year || !month) {
    return;
  }

  return new Array(LastDay(year, month)).fill('').map((_, i) => i + 1);
};

// 다른 방법 Array.from({length:12}, (_, i) => i +1)
// 아직 Array from에 저 두번째 인자 역할 안찾아봄
