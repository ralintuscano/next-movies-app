import React from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import SeriesModal from "./SeriesModal";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 400,
    width: 280,
    boxShadow: "7px 10px 11px -1px rgba(194,194,194,1)",
  },
  series__title: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
});

function Series(props) {
  const classes = useStyles();
  const onMediaFallback = (event) => (event.target.src = "/404.jpg");
  return props ? (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.Title}
          alt={props.Title}
          height="300px"
          width="100%"
          image={props.Poster}
          title="Series"
          onError={onMediaFallback}
        />
        <CardContent>
          <Typography
            className={classes.series__title}
            variant="h6"
            component="h3"
            gutterBottom
          >
            {props.Title}
          </Typography>
          <Typography variant="subtitle2" component="p">
            Year : {props.Year}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <SeriesModal {...props} />
      </CardActions>
    </Card>
  ) : (
    ""
  );
}

export default Series;
