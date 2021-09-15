import {
  SETMOVIES,
  SETTRENDINGMOVIES,
  SETUPCOMINGMOVIES,
  SELECTION,
  SETTVSHOW,
  SETPEOPLE,
} from "../constants";
import Immutable, { List } from "immutable";
const initialState = Immutable.fromJS({
  moviesList: List([]),
  trendingMovies: List([]),
  upcomingMovies: List([]),
  movieDetail: List([]),
  tvShows: List([]),
  people: List([]),
  selectedOption: "movie",
});

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETMOVIES:
      return state.set("moviesList", List([...action.data]));
    case SETTRENDINGMOVIES:
      return state.set("trendingMovies", List([...action.data]));
    case SETUPCOMINGMOVIES:
      return state.set("upcomingMovies", List([...action.data]));
    case SELECTION:
      return state.set("selectedOption", action.data);
    case SETPEOPLE:
      return state.set("people", List([...action.data]));
    case SETTVSHOW:
      return state.set("tvShows", List([...action.data]));

    default:
      return state;
  }
};

export default MovieReducer;
