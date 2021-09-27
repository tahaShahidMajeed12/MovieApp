import React from "react";
import Card from "@material-ui/core/Card";
import { CardMedia } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { IMAGE_PATH, IMAGE_ALT } from "../../store/constants";
import { cardItemStyle } from "../../styles/styleSheet";

export default function CardItem({ name, overview, path }) {
  const classes = cardItemStyle;
  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
        component="img"
        alt={IMAGE_ALT}
        height={300}
        image={IMAGE_PATH + path}
      />
      <CardContent>
        <Typography variant="h6" style={classes.CardName}>
          {name}
        </Typography>
        <Typography variant="body1" style={classes.body}>
          {overview}
        </Typography>
      </CardContent>
    </Card>
  );
}
