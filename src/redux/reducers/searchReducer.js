import { SEARCH_FOR_JOGGERS } from "../actions/actionTypes";

const initialState = "";

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_FOR_JOGGERS:
      return (state = action.payload);
    default:
      return state;
  }
};
