import React from "react";
import { Grid, Container, TextField, Button } from "@material-ui/core";
import cartoon from "../images/cartoon.jpg";
import {
  getSearch,
  stopSearch,
  getMovieListAction,
} from "../Store/actions/movieAction";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (v) => {
    if (v !== "") {
      dispatch(getSearch(v));
    } else {
      dispatch(stopSearch());
      dispatch(getMovieListAction());
    }
  };

  return (
    <Container
      maxWidth={"lg"}
      style={{
        backgroundImage: `url(${cartoon} )`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "30vw",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "flex-end",
        paddingBottom: 20,
      }}
    >
      <Grid container width="100%">
        <Grid sm={12} xs={12} md={12} item>
          <TextField
            label="Search Here...."
            variant="outlined"
            onChange={(e) => handleChange(e.target.value)}
            style={{ backgroundColor: "#fff", width: "80%" }}
          />
          <Button
            style={{
              background: "#6c74cc",
              borderRadius: 3,
              border: 0,
              color: "white",
              padding: "0 30px",
              width: 100,
              height: 55,
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchBox;
