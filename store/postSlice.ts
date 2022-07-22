import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

interface initialStateType {
  startDate: string;
  endDate: string;
  category: string;
  order: string;
}

const initialState: initialStateType = {
  startDate: JSON.stringify(new Date()),
  endDate: JSON.stringify(new Date()),
  category: 'all',
  order: 'desc',
};

const profileSlice = createSlice({
  name: 'profile',
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
} = profileSlice.actions;
export default profileSlice.reducer;
