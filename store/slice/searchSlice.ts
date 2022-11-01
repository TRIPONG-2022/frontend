import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  isSearch: boolean;
}

const initialState: SearchState = {
  isSearch: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    onSearch(state: SearchState) {
      state.isSearch = true;
    },
    offSearch: (state: SearchState) => {
      state.isSearch = false;
    },
  },
});

export const { onSearch, offSearch } = searchSlice.actions;

export default searchSlice.reducer;
