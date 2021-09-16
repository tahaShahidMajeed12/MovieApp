import {
  GetMoviesListRequest,
  GetTrendingMoviesListRequest,
  GetUpcomingMoviesListRequest,
  GetTvShows,
  GetPeopleRequest,
  Search,
} from "../requests";
import {
  setMovieListAction,
  setTrendingMoviesAction,
  setUpcomingMoviesAction,
  selection,
  setTvShowsAction,
  setPeopleAction,
  setSearch,
} from "../actions/movieAction";
import { takeEvery, all, call, put, debounce } from "@redux-saga/core/effects";
import {
  GETMOVIES,
  GETTRENDINGMOVIES,
  GETUPCOMINGMOVIES,
  GETTVSHOW,
  GETPEOPLE,
  GETSEARCH,
} from "../constants";

function* movieListSaga() {
  const dataCall = yield call(() => GetMoviesListRequest());
  const { data } = dataCall;
  yield put(setMovieListAction(data.results));
  yield put(selection("movie"));
}

function* trendingMovieListSaga() {
  const dataCall = yield call(() => GetTrendingMoviesListRequest());
  const { data } = dataCall;
  yield put(setTrendingMoviesAction(data.results));
  yield put(selection("trending"));
}

function* upcomingMovieListSaga() {
  const dataCall = yield call(() => GetUpcomingMoviesListRequest());
  const { data } = dataCall;
  yield put(setUpcomingMoviesAction(data.results));
  yield put(selection("upcoming"));
}

function* tvShowListSaga() {
  const dataCall = yield call(() => GetTvShows());
  const { data } = dataCall;
  yield put(setTvShowsAction(data.results));
  yield put(selection("Tv Shows"));
}

function* peopleListSaga() {
  const dataCall = yield call(() => GetPeopleRequest());
  const { data } = dataCall;
  yield put(setPeopleAction(data.results));
  yield put(selection("people"));
}
function* multiSearchSaga(props) {
  const dataCall = yield call(() => Search(props.data));
  const { data } = dataCall;
  yield put(setSearch(data.results));
  yield put(selection("Search Results"));
}

function* RootSaga() {
  yield all([
    takeEvery(GETMOVIES, movieListSaga),
    takeEvery(GETTRENDINGMOVIES, trendingMovieListSaga),
    takeEvery(GETUPCOMINGMOVIES, upcomingMovieListSaga),
    takeEvery(GETTVSHOW, tvShowListSaga),
    takeEvery(GETPEOPLE, peopleListSaga),
    debounce(200, GETSEARCH, multiSearchSaga),
  ]);
}

export default RootSaga;
