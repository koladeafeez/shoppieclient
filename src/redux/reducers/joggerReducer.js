import {
  GETALL_JOGGERS_REQUEST,
  GETALL_JOGGERS_SUCCESS,
  GETALL_JOGGERS_ERROR,
  GET_JOGGER_REQUEST,
  GET_JOGGER_SUCCESS,
  GET_JOGGER_ERROR,
} from "../actions/actionTypes";

const joggersInitialState = {
  loading: false,
  joggers: [],
  next: {},
  previous: {},
  pageLimit: null,
  error: null,
};

export function getAllJoggersReducer(state = joggersInitialState, action) {
  switch (action.type) {
    case GETALL_JOGGERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GETALL_JOGGERS_SUCCESS:
      console.log("action", action);
      return {
        ...state,
        loading: false,
        error: null,
        joggers: action.payload.results,
        next: action.payload.next,
        previous: action.payload.previous,
        pageLimit: action.payload.pageLimit,
      };
    case GETALL_JOGGERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

const joggerInitialState = {
  loading: false,
  jogger: {},
  error: null,
};

export function getJoggerReducer(state = joggerInitialState, action) {
  switch (action.type) {
    case GET_JOGGER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_JOGGER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        jogger: action.payload,
      };
    case GET_JOGGER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
