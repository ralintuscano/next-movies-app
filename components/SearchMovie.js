import React, { useState } from "react";
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    //make a fetch request and store data to the store

    //generate query
    const queryGenerator = (title, year) => {
      let query = "before";
      if (title) query.concat(`t=${title}`);
      if (year) query.concat(`y=${year}`);
      alert("Something :", query);
    };

    queryGenerator(title, year);
  };

  return (
    <React.Fragment>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        // onSubmit={handleSubmit}
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
        <Button className={classes.submitButton} type="submit">
          Search
        </Button>
      </form>
    </React.Fragment>
  );
}

export default SearchMovie;
