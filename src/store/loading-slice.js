import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: { isLoading: false },
  reducers: {
    setIsLoadingTrue(state, action) {
      state.isLoading = true;
    },
    setIsLoadingFalse(state, action) {
      state.isLoading = false;
    },
  },
});

export const loadingActions = loadingSlice.actions;

export default loadingSlice;
