import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DataLayerContext from "../store/DataLayerContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(7),
  },
}));

function PaginateSeries() {
  const classes = useStyles();
  const { pageNo, apiData, response, totalResults } = useContext(
    DataLayerContext
  );
  const [pageNumber, setPageNumber] = useState(1);

  const maxPage =
    totalResults % 8 === 0 ? totalResults / 8 : totalResults / 8 + 1;
  const nextBtnProps = maxPage === pageNumber ? { disabled: true } : undefined;
  const prevBtnProps = pageNo === 1 ? { disabled: true } : undefined;
  useEffect(() => {
    // alert("Dispatching an action");
  }, [pageNo]);
  return (
    <React.Fragment>
      <Grid container className={classes.root} justify="center" spacing={2}>
        <Grid item>
          <Button
            size="large"
            color="secondary"
            variant="outlined"
            {...prevBtnProps}
            onClick={() => setPageNumber(pageNo - 1)}
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
            onClick={() => setPageNumber(pageNo + 1)}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PaginateSeries;
