import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(),
    },
  },
  round__spinner: {
    // display: "flex",
    alignItems: "center",
    justify: "center",
    margin: "auto",
  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <LinearProgress /> */}
      <CircularProgress className={classes.round__spinner} />
    </div>
  );
}
