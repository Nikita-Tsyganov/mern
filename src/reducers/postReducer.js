import {
  FETCH_POSTS,
  NEW_POST,
  FIND_POST,
  UPDATE_POST,
  DELETE_POST
} from "../actions/types";

const initialState = {
  items: [], //represents posts that come in from actions (fetch requests will come from here)
  item: {} //single posts that we add
};

export default function(state = initialState, action) {
  console.log("ACTION");
  console.log(action.type);
  switch (
    action.type //from what you dispatched
  ) {
    case FETCH_POSTS:
      console.log("reducer");
      return {
        ...state,
        items: action.payload
      };

    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };

    case FIND_POST:
      return {
        ...state,
        item: action.payload
      };
    case UPDATE_POST:
      return {
        ...state,
        item: action.payload
      };
    case DELETE_POST:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}
