import axios from "axios";

import {
  GETALL_JOGGERS_REQUEST,
  GETALL_JOGGERS_SUCCESS,
  GETALL_JOGGERS_ERROR,
  GET_JOGGER_REQUEST,
  GET_JOGGER_SUCCESS,
  GET_JOGGER_ERROR,
  SEARCH_FOR_JOGGERS,
} from "./actionTypes";

export const getAllJoggersRequest = () => {
  return {
    type: GETALL_JOGGERS_REQUEST,
  };
};
export const getAllJoggersSuccess = (joggers) => {
  return {
    type: GETALL_JOGGERS_SUCCESS,
    payload: { ...joggers },
  };
};
export const getAllJoggersError = (error) => {
  return {
    type: GETALL_JOGGERS_ERROR,
    payload: error,
  };
};

export const searchTerm = (term) => {
  console.log("term from action", term);
  return {
    type: SEARCH_FOR_JOGGERS,
    payload: term,
  };
};

export const getJoggerRequest = () => {
  return {
    type: GET_JOGGER_REQUEST,
  };
};
export const getJoggerSuccess = (jogger) => {
  return {
    type: GET_JOGGER_SUCCESS,
    payload: { ...jogger },
  };
};
export const getJoggerError = (error) => {
  return {
    type: GET_JOGGER_ERROR,
    payload: error,
  };
};

// export function setSearchTerm(){

// }

// export function getSearchValue(pageNumber = 1, searchTerm) {
//   console.log("pageNumber", pageNumber);
//   let URL = `http://localhost:4000/api/product/joggers?page=${pageNumber}&limit=2&search=${searchTerm}`;
//   console.log(URL);
//   return (dispatch) => {
//     dispatch(getAllJoggersRequest());
//     axios
//       .get(URL, {
//         headers: {
//           authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNzc2OTY4ZmMyOWE5MWRhNDBhYjMzMSIsInJvbGUiOiJiYXNpYyIsImlhdCI6MTYxODQzODYxNiwiZXhwIjoxNjE4NTI1MDE2fQ.TiCBPES4kTnjnqf-TyNAcfrw4ZgQhtDTAoWU3Gdi_dY",
//         },
//       })
//       .then((response) => {
//         console.log("response is good", response);
//         if (response.status === 200 && response.statusText === "OK") {
//           console.log("response bodys", response.data);
//           //   alert("Registration Successful!" + response.data.data);
//           //   console.log(response.data.data);
//           dispatch(getAllJoggersSuccess(response.data));
//           return;
//         } else if (response.status === 200 && response.statusText !== "OK") {
//           // alert('Registration Failed' + response.data.data)
//           dispatch(getAllJoggersError);
//         }
//       })
//       .catch((error) => {
//         console.log(error.message);
//         //handle error
//       });
//   };
// }

export function getAllJoggers(pageNumber = 1, searchTerm = "", price = 0) {
  console.log("pageNumber", pageNumber);
  console.log("searchterm in action", searchTerm);
  let PROD_URL = `https://shoppieapi.herokuapp.com/api/product/joggers?page=${pageNumber}&limit=5&search=${searchTerm}&price=${price}`;
  console.log(PROD_URL);
  let LOCAL_URL = `http://localhost:4000/api/product/joggers?page=${pageNumber}&limit=5&search=${searchTerm}&price=${price}`;
  console.log(PROD_URL);
  return (dispatch) => {
    dispatch(getAllJoggersRequest());
    axios
      .get(LOCAL_URL, {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNzc2OTY4ZmMyOWE5MWRhNDBhYjMzMSIsInJvbGUiOiJiYXNpYyIsImlhdCI6MTYxODQzODYxNiwiZXhwIjoxNjE4NTI1MDE2fQ.TiCBPES4kTnjnqf-TyNAcfrw4ZgQhtDTAoWU3Gdi_dY",
        },
      })
      .then((response) => {
        console.log("response is good", response);
        if (response.status === 200 && response.statusText === "OK") {
          console.log("response bodys", response.data);
          //   alert("Registration Successful!" + response.data.data);
          //   console.log(response.data.data);
          dispatch(getAllJoggersSuccess(response.data));
          return;
        } else if (response.status === 200 && response.statusText !== "OK") {
          // alert('Registration Failed' + response.data.data)
          dispatch(getAllJoggersError);
        }
      })
      .catch((error) => {
        console.log(error.message);
        //handle error
      });
  };
}

export const getJogger = (productId, productType) => {
  let LOCAL_URL;
  console.log("in producttype", productType);
  if (productType === "jogger") {
    let PROD_URL = `https://shoppieapi.herokuapp.com/api/product/joggers/${productId}`;
    LOCAL_URL = `http://localhost:4000/api/product/joggers/${productId}`;
  } else {
    let PROD_URL = `https://shoppieapi.herokuapp.com/api/product/asookes/${productId}`;
    LOCAL_URL = `http://localhost:4000/api/product/asookes/${productId}`;
  }

  console.log("productID", productId);
  console.log("URL", URL);
  return (dispatch) => {
    dispatch(getJoggerRequest());
    axios
      .get(LOCAL_URL)
      .then((response) => {
        console.log("response is good", response);
        if (response.status === 200 && response.statusText === "OK") {
          console.log("response bodys", response.data);
          //   alert("Registration Successful!" + response.data.data);
          //   console.log(response.data.data);
          dispatch(getJoggerSuccess(response.data));
          return;
        } else if (response.status === 200 && response.statusText !== "OK") {
          // alert('Registration Failed' + response.data.data)
          dispatch(getJoggerError);
        }
      })
      .catch((error) => {
        console.log(error);
        //handle error
      });
  };
};
