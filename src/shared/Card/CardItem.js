import React from "react";
import Card from "@material-ui/core/Card";
import { CardMedia } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { IMAGE_PATH } from "../../store/constants";
import { Card_Item } from "../../styles/styleSheet";

export default function CardItem(props) {
  const classes = Card_Item;
  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height={300}
        image={IMAGE_PATH + props.path}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography variant="h6" style={classes.CardName}>
          {props.name}
        </Typography>
        <Typography variant="body1" style={classes.body}>
          {props.overview}
        </Typography>
      </CardContent>
    </Card>
  );
}
