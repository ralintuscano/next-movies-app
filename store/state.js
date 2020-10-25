import React, { useReducer } from "react";
import axios from "axios";

import DataLayerContext from "./DataLayerContext";
import initialState from "./DataLayerContext";
import Reducer from "./Reducer";
import * as t from "./constants";
import API from "../utils/api";

const SeriesStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  //called by search bar
  const getSeries = async (title, year) => {
    try {
      let query = `type=series&s=${title}&y=${year}&page=1`;
      let data = await fetch(`${API}&${query}`);
      if (data) {
        let json = await data.json();
        const res = json ? json : [];
        // console.log("Response ", res.Search);
        dispatch({
          type: t.SEARCH_DATA,
          payload: {
            pageNo: 1,
            params: { title: title, year: year },
            apiData: res.Search,
            response: res.Response,
            totalResults: res.totalResults,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //called by previous and next buttons
  const getSeriesFromNavigation = async (pageNumber, apiData, title, year) => {
    try {
      if (pageNumber >= apiData.length / 8) {
        //dispatch to fetch
        // alert("IF");
        let query = `type=series&s=${title}&y=${year}&page=${pageNumber}`;
        let data = await fetch(`${API}&${query}`);
        if (data) {
          let json = await data.json();
          const res = json ? json : [];
          const copyOriginal = [...apiData];
          const mergedResponse = copyOriginal.concat(res.Search);
          console.log("Copy Original", copyOriginal);
          console.log("Res Series", res.Search);
          console.log("Merged Series", mergedResponse);
          dispatch({
            type: t.NEXT_PAGE_DATA,
            payload: {
              pageNo: pageNumber,
              apiData: mergedResponse,
            },
          });
        }
      } else {
        // alert("ELSE");
        dispatch({ type: t.PREV_NEXT_PAGE, payload: { pageNo: pageNumber } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataLayerContext.Provider
      value={{
        pageNo: state.pageNo,
        params: state.params,
        apiData: state.apiData,
        response: state.response,
        totalResults: state.totalResults,
        getSeries,
        getSeriesFromNavigation,
      }}
    >
      {children}
    </DataLayerContext.Provider>
  );
};

export default SeriesStateProvider;
