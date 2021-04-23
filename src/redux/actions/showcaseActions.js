import axios from "axios";

import {
  GET_SHOWCASE_REQUEST,
  GET_SHOWCASE_SUCCESS,
  GET_SHOWCASE_ERROR,
} from "./actionTypes";

export const getShowcaseRequest = () => {
  return {
    type: GET_SHOWCASE_REQUEST,
  };
};
export const getShowcaseSuccess = (results) => {
  return {
    type: GET_SHOWCASE_SUCCESS,
    payload: [...results],
  };
};
export const getShowcaseError = (error) => {
  return {
    type: GET_SHOWCASE_ERROR,
    payload: error,
  };
};

export const getShowcase = () => {
  let URL = "http://localhost:4000/all";
  return (dispatch) => {
    dispatch(getShowcaseRequest());
    axios
      .get(URL)
      .then((response) => {
        console.log("response is good", response);
        if (response.status === 200 && response.statusText === "OK") {
          console.log("response bodys", response.data);
          //   alert("Registration Successful!" + response.data.data);
          //   console.log(response.data.data);
          return dispatch(getShowcaseSuccess(response.data));
        }
      })
      .catch((error) => {
        dispatch(getShowcaseError(error));
        console.log(error);
        //handle error
      });
  };
};
