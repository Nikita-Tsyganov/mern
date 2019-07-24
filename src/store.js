import { createStore, applyMiddleware, compose } from "redux";
//use compose for multiple enchanhers
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,

  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //this is for the chrome devtools extension
  )
);

export default store;
