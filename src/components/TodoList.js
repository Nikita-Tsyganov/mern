import React, { Component } from "react";
import TodoItem from "./TodoItem.js";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo._id}
        todo={todo}
        onTodoUpdate={this.props.onTodoUpdate}
        onTodoDelete={this.props.onTodoDelete}
      />
    ));
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoUpdate: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired
};

export default Todos;
