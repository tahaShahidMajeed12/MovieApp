import { connect } from "react-redux";
import {
  getSearch,
  stopSearch,
  getMovieListAction,
} from "../../store/actions/movieAction";
import SearchBox from "./SearchBoxComponent";

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetSearch: (e) => dispatch(getSearch(e)),
    dispatchStopSearch: () => dispatch(stopSearch()),
    dispatchGetMovieListAction: () => dispatch(getMovieListAction()),
  };
};

export default connect(null, mapDispatchToProps)(SearchBox);
