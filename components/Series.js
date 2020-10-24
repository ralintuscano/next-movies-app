import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
    width: 250,
    boxShadow: "7px 10px 11px -1px rgba(194,194,194,1)",
  },
});

function Series(series) {
  const classes = useStyles();
  // console.log("Series", series);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Series Image"
          height="150"
          image={series.series.Poster}
          title="Series"
        />
        <CardContent>
          <Typography variant="h5" component="h3">
            {series.series.Title}
          </Typography>
          <Typography variant="subtitle2" component="h6">
            Year : {series.series.Year}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <SeriesModal {...series.series} />
      </CardActions>
    </Card>
  );
}

export default Series;
