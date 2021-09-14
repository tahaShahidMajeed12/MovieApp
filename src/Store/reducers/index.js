import { combineReducers } from "redux";
import MovieReducer from './movieReducer';
 const Reducer=combineReducers({
     Movie:MovieReducer
 })

 export default Reducer;