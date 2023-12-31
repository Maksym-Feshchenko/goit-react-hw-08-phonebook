import { createSlice } from '@reduxjs/toolkit';

export const sliceFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(_, { payload }) {
      return payload;
    },
  },
});

export const { setFilter } = sliceFilter.actions;
export const filterReducer = sliceFilter.reducer;