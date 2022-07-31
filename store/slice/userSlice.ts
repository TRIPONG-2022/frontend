import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: '' };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser(state, action) {
      state.user = action.payload.user;
    },
  },
});

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;
