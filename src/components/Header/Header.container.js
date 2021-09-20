import {
  getUpcomingMoviesAction,
  getTrendingMoviesAction,
  getTvShowsAction,
  getPeopleAction,
} from "../../store/actions/movieAction";
import NavBar from "./Header";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchUpcomingMovie: () => dispatch(getUpcomingMoviesAction()),
    dispatchTrendingMovie: () => dispatch(getTrendingMoviesAction()),
    dispatchTvShow: () => dispatch(getTvShowsAction()),
    dispatchPeople: () => dispatch(getPeopleAction()),
  };
};

export default connect(null, mapDispatchToProps)(NavBar);
