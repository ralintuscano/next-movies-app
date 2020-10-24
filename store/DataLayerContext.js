import { createContext } from "react";
let initialState = {
  pageNo: 1,
  params: "",
  apiData: [],
};

const DataLayerContext = createContext(initialState);

export default DataLayerContext;
