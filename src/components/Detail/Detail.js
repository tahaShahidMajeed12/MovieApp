import { Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { IMAGE_ALT, IMAGE_PATH } from "../../store/constants";

const Detail = ({
  detailState,
  dispatchMovieDetail,
  dispatchTvDetail,
  dispatchPeopleDetail,
  match,
}) => {
  useEffect(() => {
    if (match.params.type === "movie") {
      dispatchMovieDetail(match.params.id);
    } else if (match.params.type === "tvShow") {
      dispatchTvDetail(match.params.id);
    } else if (match.params.type === "people") {
      dispatchPeopleDetail(match.params.id);
    }
  }, [dispatchMovieDetail, dispatchTvDetail, dispatchPeopleDetail, match]);

  return (
    <>
      {match.params.type === "movie"
        ? detailState.movieDetail.map((detailData) => (
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              alignContent="center"
              key={detailState.id}
            >
              <Grid item xs={12} sm={6} md={4} lg={6}>
                <img
                  alt={IMAGE_ALT}
                  src={IMAGE_PATH + detailData.backdrop_path}
                  width="90%"
                  height="90%"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={6}>
                <Typography variant="h2"> {detailData.title}</Typography>

                <Typography variant="body1"> {detailData.overview}</Typography>
              </Grid>
            </Grid>
          ))
        : null}
      {match.params.type === "tvShow"
        ? detailState.tvDetail.map((detailData) => (
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              alignContent="center"
              key={detailState.id}
            >
              <Grid item xs={12} sm={6} md={4} lg={6}>
                <img
                  alt={IMAGE_ALT}
                  src={IMAGE_PATH + detailData.backdrop_path}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={6}>
                <Typography variant="h2"> {detailData.name}</Typography>

                <Typography variant="body1"> {detailData.overview}</Typography>
              </Grid>
            </Grid>
          ))
        : null}
      {match.params.type === "people"
        ? detailState.peopleDetail.map((detailData) => (
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              alignContent="center"
              key={detailState.id}
            >
              <Grid item xs={12} sm={6} md={4} lg={6}>
                <img
                  alt={IMAGE_ALT}
                  src={IMAGE_PATH + detailData.profile_path}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={6}>
                <Typography variant="h2"> {detailData.name}</Typography>

                <Typography variant="body1"> {detailData.biography}</Typography>
              </Grid>
            </Grid>
          ))
        : null}
    </>
  );
};

export default Detail;
