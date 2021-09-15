import {
  GetMoviesListRequest,
  GetTrendingMoviesListRequest,
  GetUpcomingMoviesListRequest,
  GetTvShows,
  GetPeopleRequest,
} from "../requests";
import {
  SetMovieListAction,
  SetTrendingMoviesAction,
  SetUpcomingMoviesAction,
  Selection,
  SetTvShowsAction,
  SetPeopleAction,
} from "../actions/movieAction";
import { takeEvery, all, call, put } from "@redux-saga/core/effects";
import {
  GETMOVIES,
  GETTRENDINGMOVIES,
  GETUPCOMINGMOVIES,
  GETTVSHOW,
  GETPEOPLE,
} from "../constants";

function* MovieListSaga() {
  const dataCall = yield call(() => GetMoviesListRequest());
  const { data } = dataCall;
  yield put(SetMovieListAction(data.results));
  yield put(Selection("movie"));
}

function* TrendingMovieListSaga() {
  const dataCall = yield call(() => GetTrendingMoviesListRequest());
  const { data } = dataCall;
  yield put(SetTrendingMoviesAction(data.results));
  yield put(Selection("trending"));
}

function* UpcomingMovieListSaga() {
  const dataCall = yield call(() => GetUpcomingMoviesListRequest());
  const { data } = dataCall;
  yield put(SetUpcomingMoviesAction(data.results));
  yield put(Selection("upcoming"));
}

function* TvShowListSaga() {
  const dataCall = yield call(() => GetTvShows());
  const { data } = dataCall;
  yield put(SetTvShowsAction(data.results));
  yield put(Selection("Tv Shows"));
}

function* PeopleListSaga() {
  const dataCall = yield call(() => GetPeopleRequest());
  const { data } = dataCall;
  yield put(SetPeopleAction(data.results));
  yield put(Selection("people"));
}

function* RootSaga() {
  yield all([
    takeEvery(GETMOVIES, MovieListSaga),
    takeEvery(GETTRENDINGMOVIES, TrendingMovieListSaga),
    takeEvery(GETUPCOMINGMOVIES, UpcomingMovieListSaga),
    takeEvery(GETTVSHOW, TvShowListSaga),
    takeEvery(GETPEOPLE, PeopleListSaga),
  ]);
}

export default RootSaga;
