import {
  ADD_ITEM_TO_CART,
  ADD_JOGGERS_TO_CART,
  GET_ITEM_IN_CART_ERROR,
  GET_ITEM_IN_CART_REQUEST,
  GET_ITEM_IN_CART_SUCCESS,
  REMOVE_ITEM_FROM_CART,
  HANDLE_QUANTITY_CHANGE,
  HANDLE_TOTAL_CHANGE,
  HANDLE_CART_LOAD,
} from "../actions/actionTypes";

// let savedData = localStorage.getItem("cartItem");
// let count = JSON.parse(savedData) === null ? 0 : JSON.parse(savedData).length;
// // let count = parsedData.length;

// window.localStorage.setItem("itemCount", count);
// const cartInitialState = {
//   itemNumber: 0,
//   productId: null,
//   type: null,
//   joggersInCart: [],
// };

// export const cartReducer = (state = cartInitialState, action) => {
//   switch (action.type) {
//     case ADD_ITEM_TO_CART:
//       let old = window.localStorage.getItem("itemCount");
//       if (old === null) old = 0;
//       window.localStorage.setItem("itemCount", parseInt(old) + 1);
//       return {
//         ...state,
//         itemNumber: state.itemNumber + 1,
//         productId: action.payload.productId,
//         type: action.payload.type,
//       };

//     case ADD_JOGGERS_TO_CART:
//       return {
//         ...state,
//         joggersInCart: [...state.joggersInCart, action.payload],
//       };
//     default:
//       return state;
//   }
// };

// const cartItemInitialState = {
//   loading: false,
//   error: null,
//   cartItem: null,
// };

// export const cartItemReducer = (state = cartItemInitialState, action) => {
//   switch (action.type) {
//     case GET_ITEM_IN_CART_REQUEST:
//       return { ...state, loading: true };
//     case GET_ITEM_IN_CART_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         cartItem: action.payload,
//       };
//     case GET_ITEM_IN_CART_ERROR:
//       return {
//         ...state,
//         error: action.payload,
//       };
//     case REMOVE_ITEM_FROM_CART:
//       console.log("payloadmmmmmmmmmmmmmmmmm", action.payload);
//       let curState = { ...state };
//       console.log(curState);
//       return {
//         ...state,
//       };
//     default:
//       return state;
//   }
// };

let savedData = localStorage.getItem("cartItem") || [];
console.log(savedData);
let count = savedData.length === 0 ? 0 : JSON.parse(savedData).length;
// let count = parsedData.length;

window.localStorage.setItem("itemCount", count);

let initialCartQty = [];
let parsedData = savedData.length === 0 ? [] : JSON.parse(savedData);

console.log("parsedDDD", parsedData);
if (parsedData.length > 0) {
  initialCartQty = parsedData;
}

// const cartInitialState = {
//   itemNumber: 0,
//   productId: null,
//   type: null,
//   joggersInCart: [],
// };

// export const cartReducer = (state = cartInitialState, action) => {
//   switch (action.type) {
//     case ADD_ITEM_TO_CART:
//       let old = window.localStorage.getItem("itemCount");
//       if (old === null) old = 0;
//       window.localStorage.setItem("itemCount", parseInt(old) + 1);
//       return {
//         ...state,
//         itemNumber: state.itemNumber + 1,
//         productId: action.payload.productId,
//         type: action.payload.type,
//       };

//     case ADD_JOGGERS_TO_CART:
//       return {
//         ...state,
//         joggersInCart: [...state.joggersInCart, action.payload],
//       };
//     default:
//       return state;
//   }
// };

const cartItemInitialState = {
  loading: false,
  error: null,
  cartItem: null,
  itemNumber: parseInt(localStorage.getItem("itemCount")),
  productId: null,
  type: null,
  joggersInCart: [],
  notFound: 0,
  totalAmount: 0,
  cartQty: initialCartQty,
};

export const cartItemReducer = (state = cartItemInitialState, action) => {
  switch (action.type) {
    case GET_ITEM_IN_CART_REQUEST:
      return { ...state, loading: true };
    case GET_ITEM_IN_CART_SUCCESS:
      console.log("ccccccc", action.payload);
      return {
        ...state,
        loading: false,
        cartItem: action.payload.data,
        notFound: action.payload.notFound,
      };
    case GET_ITEM_IN_CART_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case REMOVE_ITEM_FROM_CART:
      console.log("payloadmmmmmmmmmmmmmmmmm", action.payload);
      let curState = state.cartItem;
      // let curCartState = curState.data;

      curState.forEach((elm, i) => {
        if (elm._id == action.payload.id) {
          console.log("idto remove", elm);
          curState.splice(i, 1);
        }
      });
      console.log("curState...", curState);
      return {
        ...state,
        cartItem: curState,
        itemNumber: state.itemNumber - 1,
      };

    case ADD_ITEM_TO_CART:
      let old = window.localStorage.getItem("itemCount");
      if (old === null) old = 0;
      window.localStorage.setItem("itemCount", parseInt(old) + 1);
      return {
        ...state,
        itemNumber: state.itemNumber + 1,
        productId: action.payload.productId,
        type: action.payload.type,
      };

    case ADD_JOGGERS_TO_CART:
      return {
        ...state,
        joggersInCart: [...state.joggersInCart, action.payload],
      };

    case HANDLE_CART_LOAD:
      let initArr = [];
      console.log("payloaddddd", action.payload);

      action.payload.forEach((elm) => {
        let subArr = {
          _id: elm._id,
          type: elm.type,
          unit: elm.unit,
          price: elm.price,
        };
        initArr.push(subArr);
        console.log("initArr", initArr);
      });

      return { ...state, cartQty: initArr };
    // cartQty: [...state.cartQty, action.payload],
    // };
    case HANDLE_QUANTITY_CHANGE:
      console.log("................", action.payload);

      let clone = [...state.cartQty];
      clone.forEach((elm) => {
        console.log("newUnit ", elm._id == action.payload.productId);
        console.log("check", action.payload.productId);
        if (elm._id === action.payload.productId) {
          elm.unit = action.payload.newUnit;
        }
      });
      console.log("clone", clone);
      return {
        ...state,
        cartQty: clone,
      };
    case HANDLE_TOTAL_CHANGE:
      let sum = 0;
      state.cartQty.forEach((elm) => {
        sum += elm.unit * elm.price;
        console.log("cart.....", action.payload);
      });

      console.log("summmmm", sum);
      return {
        ...state,
        totalAmount: sum,
      };

    default:
      return state;
  }
};
