import React from "react";
import { Grid, Container, TextField, Button } from "@material-ui/core";
import {
  getSearch,
  stopSearch,
  getMovieListAction,
} from "../store/actions/movieAction";
import { useDispatch } from "react-redux";
import { Search_Box } from "../styles/styleSheet";

const SearchBox = () => {
  const dispatch = useDispatch();

  const styles = Search_Box();
  const handleChange = (v) => {
    if (v !== "") {
      dispatch(getSearch(v));
    } else {
      dispatch(stopSearch());
      dispatch(getMovieListAction());
    }
  };

  return (
    <Container maxWidth={"lg"} className={styles.parent}>
      <Grid container width="100%">
        <Grid sm={12} xs={12} md={12} item>
          <TextField
            label="Search Here...."
            variant="outlined"
            onChange={(e) => handleChange(e.target.value)}
            className={styles.txtField}
          />
          <Button className={styles.btn}>Search</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchBox;
