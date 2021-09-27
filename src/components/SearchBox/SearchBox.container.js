import { connect } from "react-redux";
import {
  getSearch,
  stopSearch,
  getMovieListAction,
} from "../../store/actions/movieAction";
import SearchBox from "./SearchBoxComponent";

const mapDispatchToProps = {
  dispatchGetSearch: (e) => getSearch(e),
  dispatchStopSearch: () => stopSearch(),
  dispatchGetMovieListAction: () => getMovieListAction(),
};

export default connect(null, mapDispatchToProps)(SearchBox);
