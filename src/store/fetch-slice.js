import { createSlice } from '@reduxjs/toolkit';

const fetchSlice = createSlice({
  name: 'fetchMovies',
  initialState: { movies: [], input: '', page: 1 },
  reducers: {
    getMoviesFetch(state, action) {
      state.input = action.payload;
      state.page = action.payload.page;
      //   state.isLoading = true;
    },
    getMoviesSuccess(state, action) {
      state.movies = action.payload;
      //   state.isLoading = false;
    },
    getMoviesFailure(state) {
      state.isLoading = false;
    },
  },
});

export const { getMoviesFetch, getMoviesSuccess, getMoviesFailure } =
  fetchSlice.actions;

export default fetchSlice;
