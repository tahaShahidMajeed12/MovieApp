import React from "react";
import { Grid, Container, TextField, Button } from "@material-ui/core";
import { searchBoxStyle } from "../../styles/styleSheet";

const SearchBox = ({
  dispatchGetSearch,
  dispatchStopSearch,
  dispatchGetMovieListAction,
}) => {
  const styles = searchBoxStyle();
  const handleChange = (v) => {
    if (v !== "") {
      dispatchGetSearch(v);
    } else {
      dispatchStopSearch();
      dispatchGetMovieListAction();
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
