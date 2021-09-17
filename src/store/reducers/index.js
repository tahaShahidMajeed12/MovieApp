import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
const Reducer = combineReducers({
  Movie: movieReducer,
});

export default Reducer;
