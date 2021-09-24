import {
  getUpcomingMoviesAction,
  getTrendingMoviesAction,
  getTvShowsAction,
  getPeopleAction,
} from "../../store/actions/movieAction";
import NavBar from "./Header";
import { connect } from "react-redux";

const mapDispatchToProps = {
  dispatchUpcomingMovie: () => getUpcomingMoviesAction(),
  dispatchTrendingMovie: () => getTrendingMoviesAction(),
  dispatchTvShow: () => getTvShowsAction(),
  dispatchPeople: () => getPeopleAction(),
};

export default connect(null, mapDispatchToProps)(NavBar);
