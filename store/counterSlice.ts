import { createSlice } from '@reduxjs/toolkit';

export interface counterSliceState {
  counter: number;
}

const initialState = { counter: 99 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    decrement(state) {
      state.counter = state.counter - 1;
    },
    makeOne(state) {
      state.counter = 1;
    },
  },
});

export const { increment, decrement, makeOne } = counterSlice.actions;
export default counterSlice;
