import { combineReducers } from "redux";
import { cartReducer, cartItemReducer } from "./cartReducer";
import { getAllJoggersReducer, getJoggerReducer } from "./joggerReducer";
import { signupReducer, loginReducer } from "./accountReducer";
import { showcaseReducer } from "./showcaseReducer";
import { searchReducer } from "./searchReducer";

const rootReducer = combineReducers({
  showcase: showcaseReducer,
  // cart: cartReducer,
  cartItem: cartItemReducer,
  joggers: getAllJoggersReducer,
  product: getJoggerReducer,
  signUp: signupReducer,
  auth: loginReducer,
  searchTerm: searchReducer,
});

export default rootReducer;

// import { combineReducers } from 'redux'
// import cakeReducer from './cake/cakeReducer'
// import iceCreamReducer from './iceCream/iceCreamReducer'
// import userReducer from './user/userReducer'

// const rootReducer = combineReducers({
//   cake: cakeReducer,
//   iceCream: iceCreamReducer,
//   user: userReducer
// })
