import { call, put, takeEvery } from 'redux-saga/effects';
import { getMoviesSuccess } from '../store/fetch-slice';

function* workGetMoviesFetch(action) {
  const { REACT_APP_API_KEY } = process.env;
  const movies = yield call(() =>
    fetch(
      `http://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&s=${action.payload.input}&type=movie&page=${action.payload.pageNum}`
    )
  );
  const formattedMovies = yield movies.json();
  yield put(getMoviesSuccess(formattedMovies));
}

function* fetchSaga() {
  yield takeEvery('fetchMovies/getMoviesFetch', workGetMoviesFetch);
}

export default fetchSaga;
