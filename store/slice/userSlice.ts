import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  authentication: boolean;
  name: string;
  nickName: string;
  picture: string;
}

export interface UserState {
  user: User | null;
  isLogIn: boolean;
}

const initialState: UserState = {
  user: null,
  isLogIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state: UserState, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLogIn = true;
    },
  },
});

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;
