import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import API from "../utils/api";
import dynamic from "next/dynamic";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2, 4, 3),
    maxHeight: 500,
    outline: "none",
    margin: "20% 10%",
    overflowY: "auto",
  },
  read__plot: {
    borderTop: "1px solid #D3D3D3",
    padding: theme.spacing(2),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [plot, setPlot] = useState();
  const handleOpen = () => {
    setOpen(true);
    getPlot(props.imdbID);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ReactSuspense = dynamic(() => import("../components/ReactSuspense"), {
    ssr: false,
  });

  const getPlot = async (seriesId) => {
    try {
      let query = `plot=full&i=${seriesId}`;
      let data = await fetch(`${API}&${query}`);
      if (data) {
        let json = await data.json();
        const res = json ? json : [];
        setPlot(res.Plot);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={handleOpen}
      >
        Read Plot
      </Button>
      <Modal
        aria-labelledby="series-title"
        aria-describedby="series-plot"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <ReactSuspense>
              <h2 id="series__title">{props.Title}</h2>
              <p className={classes.read__plot}>{plot}</p>
            </ReactSuspense>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
