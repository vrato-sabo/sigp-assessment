import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import fetchSaga from '../sagas/fetchSaga';
import dataSlice from './data-slice';
import favouritesSlice from './favourites-slice';
import fetchSlice from './fetch-slice';
import inputSlice from './input-slice';
import loadingSlice from './loading-slice';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    loading: loadingSlice.reducer,
    favourites: favouritesSlice.reducer,
    inputState: inputSlice.reducer,
    fetchMovies: fetchSlice.reducer,
  },
  middleware: [saga],
});
saga.run(fetchSaga);

export default store;
