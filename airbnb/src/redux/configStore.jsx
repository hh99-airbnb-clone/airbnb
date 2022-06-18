import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import comment from "./modules/Comment";

const rootReducer = combineReducers({
  comment: comment,
});

const middlewares = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
const store = createStore(rootReducer, enhancer);
export default store;
