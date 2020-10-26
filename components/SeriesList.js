import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Series from "./Series";
import paginate from "../utils/paginate";
import PaginateSeries from "../components/PaginateSeries";
import DataLayerContext from "../store/DataLayerContext";
import dynamic from "next/dynamic";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(5),
    margin: 0,
    width: "100%",
  },
  paper: {
    height: 350,
    width: 200,
    backgroundColor: "#303030",
  },
}));

const SeriesList = () => {
  const classes = useStyles();
  const { pageNo, apiData, response } = useContext(DataLayerContext);
  const [eightSeries, setEightSeries] = useState();
  const ReactSuspense = dynamic(() => import("../components/ReactSuspense"), {
    ssr: false,
  });

  useEffect(() => {
    if (apiData) {
      setEightSeries(paginate(apiData, pageNo));
    }
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [apiData, response, pageNo]);

  return response ? (
    eightSeries && response == "True" ? (
      <ReactSuspense>
        <div>
          <Container className={classes.container} maxWidth={false}>
            <Grid
              container
              className={classes.root}
              justify="center"
              spacing={4}
            >
              {eightSeries.map((series, index) => (
                <Grid key={index} item>
                  <Series {...series} />
                </Grid>
              ))}
              <PaginateSeries />
            </Grid>
          </Container>
        </div>
      </ReactSuspense>
    ) : (
      <h2>NO Results Found</h2>
    )
  ) : (
    <h2>Search your favourite Series</h2>
  );
};

export default SeriesList;
