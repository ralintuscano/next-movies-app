import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Series from "./Series";
import paginate from "../utils/paginate";
import DataLayerContext from "../store/DataLayerContext";

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
  const { pageNo, apiData } = useContext(DataLayerContext);
  const [windowSize, setWindowSize] = useState();

  useEffect(() => {
    if (apiData) {
      setWindowSize(paginate(apiData, pageNo));
    }
    alert(windowSize);
  }, [apiData]);

  return windowSize ? (
    <Grid container className={classes.root} justify="center" spacing={4}>
      {windowSize.map((series, index) => (
        <Grid key={index} item>
          <Series series={series} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <h1>NO Results Found</h1>
  );
};

export default SeriesList;
