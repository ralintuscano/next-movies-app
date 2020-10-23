import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(7),
  },
  // control: {
  //   padding: theme.spacing(2),
  // },
}));

function PaginateSeries() {
  const classes = useStyles();

  // const nextBtnProps = maxPage === currPage ? { disabled: true } : undefined;
  // const prevBtnProps = currPage === 1 ? { disabled: true } : undefined;
  return (
    <React.Fragment>
      <Grid container className={classes.root} justify="center" spacing={2}>
        <Grid item>
          <Button
            size="large"
            color="secondary"
            variant="outlined"
            // {...prevBtnProps}
            // onClick={handleOpen}
          >
            Previous
          </Button>
        </Grid>
        <Grid item>
          <Button
            size="large"
            color="secondary"
            variant="contained"
            // {...nextBtnProps}
            // onClick={handleOpen}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PaginateSeries;
