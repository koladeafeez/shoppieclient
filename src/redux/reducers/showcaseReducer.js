import {
  GET_SHOWCASE_REQUEST,
  GET_SHOWCASE_SUCCESS,
  GET_SHOWCASE_ERROR,
} from "../actions/actionTypes";

const showcaseInitialState = {
  loading: false,
  data: [],
  error: null,
};

export function showcaseReducer(state = showcaseInitialState, action) {
  switch (action.type) {
    case GET_SHOWCASE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SHOWCASE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case GET_SHOWCASE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
