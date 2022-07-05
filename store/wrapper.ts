import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers } from '@reduxjs/toolkit';

import counterSlice, { counterSliceState } from './counterSlice';

export interface WrapperState {
  counter: counterSliceState;
}

const reducer = (state: WrapperState, action: AnyAction) => {
  if (action.type == HYDRATE) {
    return {
      ...state,
      ...action,
    };
  }
  return combineReducers({
    counter: counterSlice.reducer,
  })(state, action);
};

export default reducer;
