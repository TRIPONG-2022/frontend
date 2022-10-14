import moment from 'moment';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface initialStateType {
  startDate: string;
  endDate: string;
  category: string;
  order: string;
}

const initialState: initialStateType = {
  startDate: moment().format('YYYY-MM-DD'),
  endDate: moment().format('YYYY-MM-DD'),
  category: 'board',
  order: 'desc',
};

const myPageSlice = createSlice({
  name: 'myPage',
  initialState,
  reducers: {
    setSendStartDate(
      state: initialStateType,
      { payload }: PayloadAction<string>,
    ) {
      state.startDate = payload;
    },
    setSendEndDate(
      state: initialStateType,
      { payload }: PayloadAction<string>,
    ) {
      state.endDate = payload;
    },
    setSendCategory(
      state: initialStateType,
      { payload }: PayloadAction<string>,
    ) {
      state.category = payload;
    },
    setSendOrder(state: initialStateType, { payload }: PayloadAction<string>) {
      state.order = payload;
    },
  },
});

export const {
  setSendStartDate,
  setSendEndDate,
  setSendCategory,
  setSendOrder,
} = myPageSlice.actions;
export default myPageSlice.reducer;
