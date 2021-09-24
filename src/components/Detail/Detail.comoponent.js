import { connect } from "react-redux";
import Detail from "./Detail";
import {
  getPeopleDetailAction,
  getMovieDetailAction,
  getTvDetailAction,
} from "../../store/actions/movieAction";

const mapDispatchToProps = {
  dispatchMovieDetail: (id) => getMovieDetailAction(id),
  dispatchTvDetail: (id) => getTvDetailAction(id),
  dispatchPeopleDetail: (id) => getPeopleDetailAction(id),
};

const mapStateToProps = (state) => {
  return {
    detailState: () => state.Movie.toJS(),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
