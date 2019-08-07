import { combineReducers } from "redux";
import postReducer from "./reducers.js";

export default combineReducers({
  todos: postReducer
});
