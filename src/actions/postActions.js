import {
  FETCH_TODOS,
  NEW_TODO,
  FIND_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  RELOAD_TODOS
} from "./types";
import DB from "../database/DB.js";

export const fetchTodos = () => dispatch => {
  DB.all().then(todos => dispatch({ type: FETCH_TODOS, payload: todos }));
};

export const createTodo = todoData => dispatch => {
  DB.create(todoData.title).then(todo =>
    dispatch({ type: NEW_TODO, payload: todo })
  );
};

export const findTodo = todoData => dispatch => {
  DB.find(todoData).then(todo => dispatch({ type: FIND_TODO, payload: todo }));
};

export const updateTodo = todoData => dispatch => {
  DB.update(todoData).then(todo =>
    dispatch({ type: UPDATE_TODO, payload: todo })
  );
};

export const deleteTodo = todoData => dispatch => {
  DB.delete(todoData).then(todo =>
    dispatch({ type: DELETE_TODO, payload: todo })
  );
};

export const reloadTodos = todoData => dispatch => {
  dispatch({ type: RELOAD_TODOS, payload: todoData });
};
