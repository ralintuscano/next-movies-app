import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import API from "../utils/api";

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
    minWidth: 300,
    minHeight: 200,
    maxWidth: 400,
    maxHeight: 300,
    outline: "none",
    overflow: "scroll",
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [plot, setPlot] = useState();
  const { title } = props;
  const handleOpen = () => {
    setOpen(true);
    // console.log("Props ", props);
    getPlot(props.imdbID);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getPlot = async (seriesId) => {
    try {
      let query = `plot=full&i=${seriesId}`;
      let data = await fetch(`${API}&${query}`);
      if (data) {
        let json = await data.json();
        const res = json ? json : [];
        // console.log("Modal Response", res);
        setPlot(res.Plot);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(()={

  // },)
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
            <h2 id="series__title">{props.Title}</h2>
            <h3>Plot</h3>
            <p id="series__plot">{plot}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
