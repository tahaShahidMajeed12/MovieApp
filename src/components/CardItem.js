import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardMedia } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    margin: 10,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CardItem(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height={300}
        image={"http://images.tmdb.org/t/p/w300/" + props.path}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography
          variant="h6"
          style={{ textAlign: "center", color: "#bf9b30" }}
        >
          {props.name}
        </Typography>
        <Typography variant="body1" style={{ textAlign: "center" }}>
          {props.overview}
        </Typography>
      </CardContent>
    </Card>
  );
}
