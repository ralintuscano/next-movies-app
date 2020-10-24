import React, { useReducer } from "react";

import DataLayer from "./DataLayer";
import Reducer from "./Reducer";

import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = () => {
  const initialState = {};

  const [state, dispatch] = useReducer(Reducer, initialState);

  // Show a specific alert
  //   const setAlert = (msg, type, timeout = 5000) => {
  //     const id = uuid.v4();
  //     dispatch({ type: SET_ALERT, payload: { msg, type, id } });
  //     setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  //   };

  return (
    <DataLayer.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {children}
    </DataLayer.Provider>
  );
};

export default DataLayer;
