import { connect } from "react-redux";
import { getMovieListAction } from "../../store/actions/movieAction";
import CardList from "./CardList";
const mapStateToProps = (state) => {
  return {
    movieState: state.Movie.toJS(),
  };
};

const mapDispatchToProps = {
  dispatchGetMovieListAction: () => getMovieListAction(),
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
