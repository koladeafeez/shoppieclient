import axios from "axios";

import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  ADD_JOGGERS_TO_CART,
  ADD_ASOOKE_TO_CART,
  GET_ITEM_IN_CART_REQUEST,
  GET_ITEM_IN_CART_SUCCESS,
  GET_ITEM_IN_CART_ERROR,
  HANDLE_QUANTITY_CHANGE,
  HANDLE_TOTAL_CHANGE,
  HANDLE_CART_LOAD,
} from "./actionTypes";

export const addItemToCart = (productDetails) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: productDetails,
  };
};

export const removeItemFromCart = (productId, productType) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: { id: productId, type: productType },
  };
};

export const handleCartLoad = (cartData) => {
  return {
    type: HANDLE_CART_LOAD,
    payload: cartData,
  };
};

export const handleTotalChange = (price) => {
  return {
    type: HANDLE_TOTAL_CHANGE,
    payload: price,
  };
};

export const handleQuantityChange = (productId, newUnit) => {
  console.log("unit in action", newUnit);
  return {
    type: HANDLE_QUANTITY_CHANGE,
    payload: { productId, newUnit },
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
    let LOCAL_URL = "http://localhost:4000/api/cart";
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
        dispatch(getCartItemSuccess(response.data));
        if (JSON.parse(localStorage.getItem("cartItem")).length > 0)
          dispatch(
            handleCartLoad(JSON.parse(localStorage.getItem("cartItem")))
          );
        dispatch(handleTotalChange(10000));
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
