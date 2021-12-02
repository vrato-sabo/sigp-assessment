import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: { data: [] },
  reducers: {
    addMoviesToArr(state, action) {
      state.data.push(action.payload);
    },
    removeMoviesFromArr(state, action) {
      state.data = [];
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
