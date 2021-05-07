import {
  ADD_ITEM_TO_CART,
  ADD_JOGGERS_TO_CART,
  GET_ITEM_IN_CART_ERROR,
  GET_ITEM_IN_CART_REQUEST,
  GET_ITEM_IN_CART_SUCCESS,
} from "../actions/actionTypes";

// const initialState = {
// loading: false,
// registerDetails: {'image':'',
//                 'Email' : '',
//                'CompanyName': '',
//                'Address': '',
//               'PhoneNo': '',
//               'Password': '',
//               'WebUrl': ''
// },
// error: ''

// }

let savedData = localStorage.getItem("cartItem");
let count = JSON.parse(savedData) === null ? 0 : JSON.parse(savedData).length;
// let count = parsedData.length;

window.localStorage.setItem("itemCount", count);
const cartInitialState = {
  itemNumber: 0,
  productId: null,
  type: null,
  joggersInCart: [],
};

export const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

const cartItemInitialState = {
  loading: false,
  error: null,
  cartItem: null,
};

export const cartItemReducer = (state = cartItemInitialState, action) => {
  switch (action.type) {
    case GET_ITEM_IN_CART_REQUEST:
      return { ...state, loading: true };
    case GET_ITEM_IN_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItem: action.payload,
      };
    case GET_ITEM_IN_CART_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

// const assetProvidersReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case POST_ASSET_PROVIDERS_DETAILS_REQUEST:
//         return {
//             ...state,
//             loading: true
//         }
//         case POST_ASSET_PROVIDERS_DETAILS_SUCCESS:
//         return initialState

//         case POST_ASSET_PROVIDERS_DETAILS_FAILURE:
//         return {
//             loading: false,
//             registerDetails: [],
//             error: action.payload
//         }
//         default: return state
//     }
// }
