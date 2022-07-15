import { createSlice, current } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface exampleCounterSliceState {
  counter: number;
}

const initialState = { counter: 0 };

const exampleCounterSlice = createSlice({
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

  extraReducers: {
    // 여기서 action이 server store 이다
    [HYDRATE]: (state, action) => {
      console.log('state', current(state));
      console.log('action', action);
      if (!action.payload.exampleCounter.counter) {
        return state;
      }
      console.log('ssr에서 dispatch 반영', action);
      state.counter = action.payload.exampleCounter.counter;
    },
  },
});

export const { increment, decrement, makeOne } = exampleCounterSlice.actions;
export default exampleCounterSlice.reducer;
