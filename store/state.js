import React, { useReducer } from "react";
import axios from "axios";

import DataLayerContext from "./DataLayerContext";
import Reducer from "./Reducer";
import * as t from "./constants";
import API from "../utils/api";

const SeriesStateProvider = ({ children }) => {
  let initialState = {
    pageNo: 1,
    params: "",
    apiData: [],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  //called by search bar
  const getSeries = async (title, year) => {
    try {
      let query = `t=${title}&y=${year}`;
      let data = await fetch(`${API}&${query}`);
      if (data) {
        let json = await data.json();
        const res = json ? json : [];
        dispatch({
          type: t.SEARCH_DATA,
          payload: { params: { title: title, year: year }, apiData: [res] },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //called by previous and next buttons
  //   const getSeriesFromNavigation = async(query,pageNo) ={
  //     try {
  //             if(pageNo <= (totalPosts/8)){

  //             }
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //   }

  return (
    <DataLayerContext.Provider
      value={{
        pageNo: state.pageNo,
        params: state.params,
        apiData: state.apiData,
        getSeries,
      }}
    >
      {children}
    </DataLayerContext.Provider>
  );
};

export default SeriesStateProvider;

// 4 dispatch functions :
//         SEARCH Bar

//         NEXT_PAGE_DATA
//         NEXT_NAV

//         PREV NAV
