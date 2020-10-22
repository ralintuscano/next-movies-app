import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Series from "./Series";

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

  return (
    <Grid container className={classes.root} justify="center" spacing={4}>
      {/* <Grid item xs={12}> */}
      {/* <Grid container justify="center" spacing={4}> */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => (
        <Grid key={value} item>
          <Series />
        </Grid>
      ))}
      {/* </Grid> */}
      {/* </Grid> */}
    </Grid>
  );
};

export default SeriesList;
