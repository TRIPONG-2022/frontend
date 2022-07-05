import { configureStore, Reducer, AnyAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import reducer, { WrapperState } from './wrapper';

const makeStore = () =>
  configureStore({ reducer: reducer as Reducer<WrapperState, AnyAction> });

const wrapper = createWrapper(makeStore);

export default wrapper;
