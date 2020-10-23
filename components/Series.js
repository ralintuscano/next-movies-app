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
    // height: 350,
    width: 250,
    boxShadow: "7px 10px 11px -1px rgba(194,194,194,1)",
  },
});
function Series() {
  const classes = useStyles();
  const props = {
    title: "Batman Returns",
    plot:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eligendi necessitatibus minima minus laborum saepe reprehenderit maiores numquam, magnam nulla dicta qui voluptas vero quibusdam harum facere excepturi enim veniam?",
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Series Image"
          height="220"
          image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80"
          title="Series"
        />
        <CardContent>
          <Typography variant="h5" component="h3">
            Title : Batman
          </Typography>
          <Typography variant="subtitle2" component="h6">
            Year : 1999
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <SeriesModal {...props} />
      </CardActions>
    </Card>
  );
}

export default Series;
