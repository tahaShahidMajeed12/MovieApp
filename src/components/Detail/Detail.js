import { Grid } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMAGE_ALT } from "../../store/constants";

const Detail = ({
  detailState,
  dispatchMovieDetail,
  dispatchTvDetail,
  dispatchPeopleDetail,
}) => {
  const location = useLocation();

  const [data, setData] = useState([]);

  return (
    <>
      {location.state.type === "movie" ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <Grid item xs={12} sm={6} md={4} lg={6}>
            <img
              alt={IMAGE_ALT}
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
              }
              width="90%"
              height="90%"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={6}>
            jdjjdkj
          </Grid>
        </Grid>
      ) : null}
      {location.state.type === "tvShow" ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <Grid item xs={12} sm={6} md={4} lg={6}>
            <img
              alt="itsy bitsy"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={6}>
            jdjjdkj
          </Grid>
        </Grid>
      ) : null}
      {location.state.type === "people" ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <Grid item xs={12} sm={6} md={4} lg={6}>
            jdjjdkj
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={6}>
            jdjjdkj
          </Grid>
        </Grid>
      ) : null}
    </>
  );
};

export default Detail;
