import axios from "axios";
import FormData from "form-data";

import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "./actionTypes";

export const signupRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

export const signupSuccess = (data) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: data,
  };
};

export const signupError = (error) => {
  return {
    type: SIGNUP_ERROR,
    payload: error,
  };
};

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
};

export const signUp = (registrationDetails) => {
  let URL = "http://localhost:4000/api/account/register";
  return (dispatch) => {
    dispatch(signupRequest());
    // try {
    axios
      .post(URL, registrationDetails, {
        headers: {
          contentType: "application/json",
        },
      })
      .then((response) => {
        console.log("200", response.data);
        return dispatch(signupSuccess(response.data));
      })
      .catch((e) => {
        console.log("error", e);
        dispatch(signupError(e));
      });
    // } catch (error) {
    //   console.log(error);
    // }
  };
};

export const logIn = (loginDetails) => {
  let URL = "http://localhost:4000/api/account/login";
  return (dispatch) => {
    dispatch(loginRequest());
    // try {
    axios
      .post(URL, loginDetails, {
        headers: {
          contentType: "application/json",
        },
      })
      .then((response) => {
        console.log("200", response.data);
        return dispatch(loginSuccess(response.data));
      })
      .catch((e) => {
        console.log("error", e);
        dispatch(loginError(e));
      });
    // } catch (error) {
    //   console.log(error);
    // }
  };
};
