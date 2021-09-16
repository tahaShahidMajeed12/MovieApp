import {
  SETMOVIES,
  SETTRENDINGMOVIES,
  SETUPCOMINGMOVIES,
  SELECTION,
  SETTVSHOW,
  SETPEOPLE,
  SETSEARCH,
  SETSEARCHSTOP,
} from "../constants";
import { fromJS, List } from "immutable";
const initialState = fromJS({
  moviesList: List([]),
  trendingMovies: List([]),
  upcomingMovies: List([]),
  movieDetail: List([]),
  tvShows: List([]),
  people: List([]),
  selectedOption: "movie",
  isSearch: false,
  search: List([]),
});

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETMOVIES:
      return state.set("moviesList", List(action.data));
    case SETTRENDINGMOVIES:
      return state.set("trendingMovies", List(action.data));
    case SETUPCOMINGMOVIES:
      return state.set("upcomingMovies", List(action.data));
    case SELECTION:
      return state.set("selectedOption", action.data);
    case SETPEOPLE:
      return state.set("people", List(action.data));
    case SETTVSHOW:
      return state.set("tvShows", List(action.data));
    case SETSEARCH:
      if (state.get("isSearch") === false) {
        state = state.set("isSearch", true);
      }
      if (action.data.length >= 1) {
        console.log(state.get("search"));
        return state.set("search", List([...action.data]));
      }
      return state;
    case SETSEARCHSTOP:
      return state.set("isSearch", false);
    default:
      return state;
  }
};

export default MovieReducer;
