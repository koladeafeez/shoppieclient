import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
// import logger from 'redux-logger'
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const redux = require("redux");
const createStore = redux.createStore;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
