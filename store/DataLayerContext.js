import { createContext } from "react";
export const initialState = {
  pageNo: 1,
  params: "",
  apiData: [],
  response: "",
  totalResults: "",
};

const DataLayerContext = createContext(initialState);

export default DataLayerContext;
