import {
  FETCH_TODOS,
  NEW_TODO,
  FIND_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from "../actions/types.js";

const initialState = {
  items: [], //represents posts that come in from actions (fetch requests will come from here)
  //item: {} //single posts that we add
};

export default function(state = initialState, action) {
  switch (
    action.type //from what you dispatched
  ) {
    case FETCH_TODOS:
      return {
        //...state,
        items: action.payload
      };

    case NEW_TODO:
      return {
        //adds the new item to the array
        items: [...state.items, action.payload]
      };

    case FIND_TODO:
      //let { _id } = action.payload;
      return {
        items: [...state.items].filter(item => item._id === action.payload._id)
      };

    case UPDATE_TODO:
      //update selected item form
      const updatedItem = { ...action.payload };
      return {
        items: [...state.items].map(item => {
          if (item._id === updatedItem._id) {
            return updatedItem;
          } else return item;
        })
      };

    case DELETE_TODO:
      //filter deleted item from array
      let { _id } = action.payload;
      return {
        items: [...state.items].filter(item => item._id !== _id)
      };

    default:
      return state;
  }
}
