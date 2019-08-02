import {
  FETCH_TODOS,
  NEW_TODO,
  FIND_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  RELOAD_TODOS
} from "../actions/types";

const initialState = {
  items: [], //represents posts that come in from actions (fetch requests will come from here)
  item: {} //single posts that we add
};

export default function(state = initialState, action) {
  switch (
    action.type //from what you dispatched
  ) {
    case FETCH_TODOS:
      console.log("reducer");
      return {
        ...state,
        items: action.payload
      };

    case NEW_TODO:
      return {
        ...state,
        item: action.payload
      };

    case FIND_TODO:
      return {
        ...state,
        item: action.payload
      };
    case UPDATE_TODO:
      return {
        ...state,
        item: action.payload
      };
    case DELETE_TODO:
      return {
        ...state,
        item: action.payload
      };
    case RELOAD_TODOS:
      return {
        ...state,
        items: action.payload
      };

    default:
      return state;
  }
}
