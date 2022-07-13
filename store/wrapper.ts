import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers } from '@reduxjs/toolkit';

import counterSlice, { counterSliceState } from './counterSlice';

export interface WrapperState {
  counter: counterSliceState;
}

const reducer = (state: WrapperState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        counter: counterSlice.reducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export default reducer;
