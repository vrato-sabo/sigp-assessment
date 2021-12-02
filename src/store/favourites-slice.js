import { createSlice } from '@reduxjs/toolkit';

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: { favourites: [] },
  reducers: {
    addMovieToFavourites(state, action) {
      state.favourites.push(action.payload);
      // localStorage.setItem('favourites', JSON.stringify(state.favourites));
    },
    removeMovieFromFavourites(state, action) {
      state.favourites.splice(action.payload);
    },
  },
});

export const favouritesActions = favouritesSlice.actions;

export default favouritesSlice;
