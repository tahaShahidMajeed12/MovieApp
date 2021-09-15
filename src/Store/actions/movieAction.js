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
} from "../constants";

export const GetMovieListAction = () => {
  return {
    type: GETMOVIES,
  };
};

export const SetMovieListAction = (data) => {
  return {
    type: SETMOVIES,
    data: data,
  };
};

export const GetTrendingMoviesAction = () => {
  return {
    type: GETTRENDINGMOVIES,
  };
};

export const SetTrendingMoviesAction = (data) => {
  return {
    type: SETTRENDINGMOVIES,
    data: data,
  };
};
export const GetUpcomingMoviesAction = () => {
  return {
    type: GETUPCOMINGMOVIES,
  };
};
export const SetUpcomingMoviesAction = (data) => {
  return {
    type: SETUPCOMINGMOVIES,
    data: data,
  };
};
export const Selection = (data) => {
  return {
    type: SELECTION,
    data: data,
  };
};

export const GetTvShowsAction = () => {
  return {
    type: GETTVSHOW,
  };
};

export const SetTvShowsAction = (data) => {
  return {
    type: SETTVSHOW,
    data: data,
  };
};

export const GetPeopleAction = () => {
  return {
    type: GETPEOPLE,
  };
};

export const SetPeopleAction = (data) => {
  return {
    type: SETPEOPLE,
    data: data,
  };
};
