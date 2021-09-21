import { takeEvery, all, call, put, debounce } from "@redux-saga/core/effects";
import {
  getMoviesListRequest,
  getTrendingMoviesListRequest,
  getUpcomingMoviesListRequest,
  getTvShows,
  getPeopleRequest,
  search,
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
import {
  GET_MOVIES,
  GET_TRENDING_MOVIES,
  GET_UPCOMING_MOVIES,
  GET_TV_SHOW,
  GET_PEOPLE,
  GET_SEARCH,
} from "../constants";

function* movieListSaga() {
  const apiCall = yield call(() => getMoviesListRequest());
  const { data } = apiCall;
  yield put(setMovieListAction(data.results));
  yield put(selection("movie"));
}

function* trendingMovieListSaga() {
  const apiCall = yield call(() => getTrendingMoviesListRequest());
  const { data } = apiCall;
  yield put(setTrendingMoviesAction(data.results));
  yield put(selection("trending"));
}

function* upcomingMovieListSaga() {
  const apiCall = yield call(() => getUpcomingMoviesListRequest());
  const { data } = apiCall;
  yield put(setUpcomingMoviesAction(data.results));
  yield put(selection("upcoming"));
}

function* tvShowListSaga() {
  const apiCall = yield call(() => getTvShows());
  const { data } = apiCall;
  yield put(setTvShowsAction(data.results));
  yield put(selection("Tv Shows"));
}

function* peopleListSaga() {
  const apiCall = yield call(() => getPeopleRequest());
  const { data } = apiCall;
  yield put(setPeopleAction(data.results));
  yield put(selection("people"));
}
function* multiSearchSaga(props) {
  const apiCall = yield call(() => search(props.data));
  const { data } = apiCall;
  yield put(setSearch(data.results));
  yield put(selection("Search Results"));
}

function* RootSaga() {
  yield all([
    takeEvery(GET_MOVIES, movieListSaga),
    takeEvery(GET_TRENDING_MOVIES, trendingMovieListSaga),
    takeEvery(GET_UPCOMING_MOVIES, upcomingMovieListSaga),
    takeEvery(GET_TV_SHOW, tvShowListSaga),
    takeEvery(GET_PEOPLE, peopleListSaga),
    debounce(200, GET_SEARCH, multiSearchSaga),
  ]);
}

export default RootSaga;
