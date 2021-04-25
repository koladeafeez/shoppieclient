import axios from "axios";

import {
  ADD_ITEM_TO_CART,
  ADD_JOGGERS_TO_CART,
  ADD_ASOOKE_TO_CART,
  GET_ITEM_IN_CART_REQUEST,
  GET_ITEM_IN_CART_SUCCESS,
  GET_ITEM_IN_CART_ERROR,
} from "./actionTypes";

export const addItemToCart = (productDetails) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: productDetails,
  };
};

export const addJoggerToCart = (jogger) => {
  console.log("from cart item", jogger);
  return {
    type: ADD_JOGGERS_TO_CART,
    payload: jogger,
  };
};

export function addToCart(productDetails, jogger) {
  return (dispatch) => {
    dispatch(addItemToCart(productDetails));
    dispatch(addJoggerToCart(jogger));
    // setTimeout(() => {

    // }, 2000);
  };
}

export const getCartItemRequest = () => {
  return {
    type: GET_ITEM_IN_CART_REQUEST,
  };
};
export const getCartItemSuccess = (items) => {
  return {
    type: GET_ITEM_IN_CART_SUCCESS,
    payload: items,
  };
};
export const getCartItemError = (error) => {
  return {
    type: GET_ITEM_IN_CART_ERROR,
    payload: error,
  };
};

export function getItemInCart(data) {
  console.log(data);
  return (dispatch) => {
    dispatch(getCartItemRequest());
    let PROD_URL = `https://shoppieapi.herokuapp.com/api/cart`;
    let URL = "http://localhost:4000/api/cart";
    // fetch(URL, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    console.log(URL);
    console.log(data);
    // return (dispatch) => {
    // dispatch(loginRequest());
    // try {
    axios
      .post(PROD_URL, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("200", response.data);
        return dispatch(getCartItemSuccess(response.data));
      })
      .catch((e) => {
        console.log("error", e);
        dispatch(getCartItemError(e));
      });
    // } catch (error) {
    //   console.log(error);
    // }
  };
}
