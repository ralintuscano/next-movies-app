import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DataLayerContext from "../store/DataLayerContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
  },
}));

function PaginateSeries() {
  const classes = useStyles();
  const {
    pageNo,
    apiData,
    response,
    totalResults,
    params,
    getSeriesFromNavigation,
  } = useContext(DataLayerContext);

  const maxPage = Math.floor(totalResults / 8);
  const firstPageIsLast = totalResults < 8;
  const nextBtnProps = maxPage === pageNo || firstPageIsLast ? { disabled: true } : undefined;
  const prevBtnProps = pageNo > 1 ? undefined : { disabled: true };

  return (
    <React.Fragment>
      <Grid container className={classes.root} justify="center" spacing={2}>
        <Grid item>
          <Button
            size="large"
            color="secondary"
            variant="outlined"
            {...prevBtnProps}
            onClick={() => getSeriesFromNavigation(pageNo - 1, apiData)}
          >
            Previous
          </Button>
        </Grid>
        <Grid item>
          <Button
            size="large"
            color="secondary"
            variant="contained"
            {...nextBtnProps}
            onClick={() =>
              getSeriesFromNavigation(
                pageNo + 1,
                apiData,
                params.title,
                params.year
              )
            }
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PaginateSeries;
