import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

import axios from "axios";
import { red } from "@material-ui/core/colors";
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
    // const query = `&t=the&y=''`;
    getSeries(title, year);
  };

  return (
    <React.Fragment>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit} //Build Error
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
