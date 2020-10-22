import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";

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
    maxWidth: 400,
    outline: "none",
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            <h2 id="series__title">Batman Returns</h2>
            <p id="series__plot">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              eligendi necessitatibus minima minus laborum saepe reprehenderit
              maiores numquam, magnam nulla dicta qui voluptas vero quibusdam
              harum facere excepturi enim veniam?
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
