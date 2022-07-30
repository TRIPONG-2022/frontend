import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
  configureStore({
    reducer: {},
    devTools: process.env.NODE_ENV !== 'production',
  });

const wrapper = createWrapper(makeStore);

export default wrapper;

export type Appstore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<Appstore['getState']>;
