import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../actions/actionTypes";

const signupInitialState = {
  loading: false,
  registerUser: null,
  error: null,
};

export const signupReducer = (state = signupInitialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SIGNUP_SUCCESS:
      return { ...state, loading: false, registerUser: action.payload };

    case SIGNUP_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const loginInitialState = {
  loading: false,
  auth: null,
  error: null,
};

export const loginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return { ...state, loading: false, auth: action.payload };

    case LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
