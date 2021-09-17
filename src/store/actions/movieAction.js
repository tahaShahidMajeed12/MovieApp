import {
  GET_MOVIES,
  GET_TRENDING_MOVIES,
  SET_MOVIES,
  SET_TRENDING_MOVIES,
  GET_UPCOMING_MOVIES,
  SET_UPCOMING_MOVIES,
  SELECTION,
  GET_TV_SHOW,
  SET_TV_SHOW,
  GET_PEOPLE,
  SET_PEOPLE,
  GET_SEARCH,
  SET_SEARCH,
  SET_SEARCH_STOP,
} from "../constants";

export const getMovieListAction = () => {
  return {
    type: GET_MOVIES,
  };
};

export const setMovieListAction = (data) => {
  return {
    type: SET_MOVIES,
    data: data,
  };
};

export const getTrendingMoviesAction = () => {
  return {
    type: GET_TRENDING_MOVIES,
  };
};

export const setTrendingMoviesAction = (data) => {
  return {
    type: SET_TRENDING_MOVIES,
    data: data,
  };
};
export const getUpcomingMoviesAction = () => {
  return {
    type: GET_UPCOMING_MOVIES,
  };
};
export const setUpcomingMoviesAction = (data) => {
  return {
    type: SET_UPCOMING_MOVIES,
    data: data,
  };
};
export const selection = (data) => {
  return {
    type: SELECTION,
    data: data,
  };
};

export const getTvShowsAction = () => {
  return {
    type: GET_TV_SHOW,
  };
};

export const setTvShowsAction = (data) => {
  return {
    type: SET_TV_SHOW,
    data: data,
  };
};

export const getPeopleAction = () => {
  return {
    type: GET_PEOPLE,
  };
};

export const setPeopleAction = (data) => {
  return {
    type: SET_PEOPLE,
    data: data,
  };
};

export const getSearch = (data) => {
  return {
    type: GET_SEARCH,
    data: data,
  };
};

export const setSearch = (data) => {
  return {
    type: SET_SEARCH,
    data: data,
  };
};

export const stopSearch = () => {
  return {
    type: SET_SEARCH_STOP,
  };
};