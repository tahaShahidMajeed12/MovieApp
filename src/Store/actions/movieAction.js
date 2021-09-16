import {
  GETMOVIES,
  GETTRENDINGMOVIES,
  SETMOVIES,
  SETTRENDINGMOVIES,
  GETUPCOMINGMOVIES,
  SETUPCOMINGMOVIES,
  SELECTION,
  GETTVSHOW,
  SETTVSHOW,
  GETPEOPLE,
  SETPEOPLE,
  GETSEARCH,
  SETSEARCH,
  SETSEARCHSTOP,
} from "../constants";

export const getMovieListAction = () => {
  return {
    type: GETMOVIES,
  };
};

export const setMovieListAction = (data) => {
  return {
    type: SETMOVIES,
    data: data,
  };
};

export const getTrendingMoviesAction = () => {
  return {
    type: GETTRENDINGMOVIES,
  };
};

export const setTrendingMoviesAction = (data) => {
  return {
    type: SETTRENDINGMOVIES,
    data: data,
  };
};
export const getUpcomingMoviesAction = () => {
  return {
    type: GETUPCOMINGMOVIES,
  };
};
export const setUpcomingMoviesAction = (data) => {
  return {
    type: SETUPCOMINGMOVIES,
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
    type: GETTVSHOW,
  };
};

export const setTvShowsAction = (data) => {
  return {
    type: SETTVSHOW,
    data: data,
  };
};

export const getPeopleAction = () => {
  return {
    type: GETPEOPLE,
  };
};

export const setPeopleAction = (data) => {
  return {
    type: SETPEOPLE,
    data: data,
  };
};

export const getSearch = (data) => {
  return {
    type: GETSEARCH,
    data: data,
  };
};

export const setSearch = (data) => {
  return {
    type: SETSEARCH,
    data: data,
  };
};

export const stopSearch = () => {
  return {
    type: SETSEARCHSTOP,
  };
};
