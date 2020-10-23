import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(7),
  },
}));

function PaginateSeries() {
  const classes = useStyles();
  const [pageNo, setPageNo] = useState(1);
  const nextBtnProps = pageNo <= 5 ? undefined : { disabled: true };
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
            onClick={() => setPageNo(pageNo - 1)}
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
            onClick={() => setPageNo(pageNo + 1)}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PaginateSeries;
