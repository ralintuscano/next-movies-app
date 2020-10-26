import React from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
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

function Series(series) {
  const classes = useStyles();
  const onMediaFallback = (event) => (event.target.src = "/404.jpg");
  return series.series ? (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={series.series.Title}
          height="300px"
          width="100%"
          image={series.series.Poster}
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
            {series.series.Title}
          </Typography>
          <Typography variant="subtitle2" component="p">
            Year : {series.series.Year}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <SeriesModal {...series.series} />
      </CardActions>
    </Card>
  ) : (
    ""
  );
}

export default Series;
