import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'inputState',
  initialState: { emptyString: '' },
  reducers: {
    setInputState(state, action) {
      state.emptyString = action.payload;
    },
    setInputToEmpty(state, action) {
      state.emptyString = '';
    },
  },
});

export const inputActions = inputSlice.actions;

export default inputSlice;
