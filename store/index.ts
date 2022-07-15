import { configureStore, Reducer, AnyAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import exampleCounterReducer from './slice/exampleCounterSlice';

const makeStore = () =>
  configureStore({ reducer: { exampleCounter: exampleCounterReducer } });

const wrapper = createWrapper(makeStore);

export default wrapper;

export type Appstore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<Appstore['getState']>;
