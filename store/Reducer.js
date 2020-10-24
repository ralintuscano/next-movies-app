import * as t from "./constants";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case t.SEARCH_DATA:
      return {
        pageNo: 1,
        params: payload.params,
        apiData: payload.apiData,
        response: payload.response,
        totalResults: payload.totalResults,
      };

    case t.NEXT_PAGE_DATA:
      return {
        ...state,
        pageNo: payload.pageNo,
        // apiData: payload.apiData,
      };
    case t.PREV_NEXT_PAGE:
      return {
        ...state,
        pageNo: payload.pageNo,
      };
    default:
      return state;
  }
};
