import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Series from "./Series";
import paginate from "../utils/paginate";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(5),
  },
  paper: {
    height: 350,
    width: 250,
    backgroundColor: "#303030",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const SeriesList = () => {
  const classes = useStyles();

  const data = {
    pageNo: 1,
    seriesDetails: [
      { imdbId: 2443434, title: "batman", year: 1999, plot: "abc" },
      { imdbId: 2, title: "batman", year: 1, plot: "abc" },
      { imdbId: 3, title: "batman", year: 1999, plot: "abc" },
      { imdbId: 4, title: "batman", year: 1999, plot: "abc" },
      { imdbId: 5, title: "batman", year: 1999, plot: "abc" },
      { imdbId: 6, title: "batman", year: 1999, plot: "abc" },
      { imdbId: 7, title: "batman", year: 1999, plot: "abc" },
      { imdbId: 8, title: "batman", year: 1999, plot: "abc" },
      { imdbId: 9, title: "batman", year: 1999, plot: "abc" },
    ],
  };

  const seriesItems = paginate(data);
  return (
    <Grid container className={classes.root} justify="center" spacing={4}>
      {/* <Grid item xs={12}> */}
      {/* <Grid container justify="center" spacing={4}> */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((series, index) => (
        <Grid key={index} item>
          <Series series={series} />
        </Grid>
      ))}
      {seriesItems.map((series, index) => (
        <h6>{series.title}</h6>
      ))}
      {/* </Grid> */}
      {/* </Grid> */}
    </Grid>
  );
};

export default SeriesList;
