import {
  SET_MOVIES,
  SET_TRENDING_MOVIES,
  SET_UPCOMING_MOVIES,
  SELECTION,
  SET_TV_SHOW,
  SET_PEOPLE,
  SET_SEARCH,
  SET_SEARCH_STOP,
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

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return state.set("moviesList", List(action.data));
    case SET_TRENDING_MOVIES:
      return state.set("trendingMovies", List(action.data));
    case SET_UPCOMING_MOVIES:
      return state.set("upcomingMovies", List(action.data));
    case SELECTION:
      return state.set("selectedOption", action.data);
    case SET_PEOPLE:
      return state.set("people", List(action.data));
    case SET_TV_SHOW:
      return state.set("tvShows", List(action.data));
    case SET_SEARCH:
      if (state.get("isSearch") === false) {
        state = state.set("isSearch", true);
      }
      if (action.data.length >= 1) {
        console.log(state.get("search"));
        return state.set("search", List([...action.data]));
      }
      return state;
    case SET_SEARCH_STOP:
      return state.set("isSearch", false);
    default:
      return state;
  }
};

export default movieReducer;
