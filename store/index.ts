import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import searchReducer from './slice/searchSlice';
import userReducer from './slice/userSlice';
const makeStore = () =>
  configureStore({
    reducer: { user: userReducer, search: searchReducer },
    devTools: process.env.NODE_ENV !== 'production',
  });

const wrapper = createWrapper(makeStore);

export default wrapper;

export type Appstore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<Appstore['getState']>;
export type AppDispatch = ReturnType<Appstore['dispatch']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
