import {
  GETMOVIES,
  GETTRENDINGMOVIES,
  SETMOVIES,
  SETTRENDINGMOVIES,
  GETUPCOMINGMOVIES,
  SETUPCOMINGMOVIES,
  SELECTION,
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
