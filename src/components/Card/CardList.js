import { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import CardItem from "./CardItem";

import { Card_List } from "../../styles/styleSheet";
const CardList = (props) => {
  const state = props.movieState;
  useEffect(() => {
    props.dispatchGetMovieListAction();
  }, [props]);

  const classes = Card_List();

  return (
    <>
      <Typography variant="h2" className={classes.heading}>
        {state.selectedOption.toUpperCase()}
      </Typography>
      <Grid container className={classes.body} justifyContent="center">
        {state.selectedOption === "movie" &&
        state.isSearch === false &&
        state.moviesList
          ? state.moviesList.map((data, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CardItem
                  id={data.id}
                  name={data.original_title}
                  overview={data.overview}
                  path={data.poster_path}
                />
              </Grid>
            ))
          : null}
        {state.selectedOption === "trending" &&
        state.isSearch === false &&
        state.trendingMovies
          ? state.trendingMovies.map((data, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CardItem
                  id={data.id}
                  name={data.original_title}
                  overview={data.overview}
                  path={data.poster_path}
                />
              </Grid>
            ))
          : null}
        {state.selectedOption === "upcoming" &&
        state.isSearch === false &&
        state.upcomingMovies
          ? state.upcomingMovies.map((data, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CardItem
                  id={data.id}
                  name={data.original_title}
                  overview={data.overview}
                  path={data.poster_path}
                />
              </Grid>
            ))
          : null}
        {state.selectedOption === "Tv Shows" &&
        state.isSearch === false &&
        state.tvShows
          ? state.tvShows.map((data, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CardItem
                  id={data.id}
                  name={data.name}
                  overview={data.overview}
                  path={data.poster_path}
                />
              </Grid>
            ))
          : null}
        {state.selectedOption === "people" &&
        state.isSearch === false &&
        state.people
          ? state.people.map((data, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CardItem
                  id={data.id}
                  name={data.name}
                  overview={data.overview}
                  path={data.profile_path}
                />
              </Grid>
            ))
          : null}
        {state.isSearch === true && state.search
          ? state.search.map((data, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CardItem
                  id={data.id}
                  name={data.name}
                  overview={data.overview}
                  path={data.poster_path}
                />
              </Grid>
            ))
          : null}
      </Grid>
    </>
  );
};
export default CardList;
