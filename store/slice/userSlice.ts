import { createSlice } from '@reduxjs/toolkit';
import { Stats } from 'fs';

const initialState = {
  authentication: false,
  name: '',
  nickName: '',
  picture: '',
  isLogIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser(state, action) {
      state.authentication = action.payload.authentication == 1 ? true : false;
      state.name = action.payload.name;
      state.nickName = action.payload.nickName;
      state.picture = action.payload.picture;
      state.isLogIn = action.payload.isLogIn;
    },
  },
});

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;
