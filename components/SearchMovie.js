import React, { useState, useEffect, useContext } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

import DataLayerContext from "../store/DataLayerContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: theme.spacing(2),
    "& > *": {
      margin: theme.spacing(1),
      textAlign: "center",
      width: "25ch",
    },
  },
  submitButton: {
    background: theme.palette.primary.main,
    border: 0,
    borderRadius: 3,
    color: "white",
    height: "4em",
    padding: "0 30px",
    width: "25ch",
    "&:hover": {
      background: "#3B4B95",
    },
  },
}));

function SearchMovie() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [searchResult, setSearchResult] = useState();
  const searchBtnProps = title === "" ? { disabled: true } : undefined;

  const { getSeries, pageNo } = useContext(DataLayerContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    getSeries(title, year);
  };

  return (
    <React.Fragment>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Series Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Year"
          variant="outlined"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          {...searchBtnProps}
        >
          Search
        </Button>
      </form>
    </React.Fragment>
  );
}

export default SearchMovie;
