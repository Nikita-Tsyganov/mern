import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

export class Todo extends Component {
  handleCompletedToggle = e => {
    const updatedTodo = { ...this.props.todo };
    updatedTodo.completed = !updatedTodo.completed;
    this.props.onTodoUpdate(updatedTodo);
  };

  render() {
    const { _id, title, completed } = this.props.todo;
    return (
      <div style={{ textDecoration: completed ? "line-through" : "none" }}>
        <input
          type="checkbox"
          checked={completed}
          onChange={this.handleCompletedToggle}
          style={{ cursor: "pointer" }}
        />
        {title}
        <Button
          type="button"
          color="danger"
          size="sm"
          className="rounded-circle"
          style={{ float: "right", lineHeight: "0.93rem" }}
          onClick={() => this.props.onTodoDelete(_id)}
        >
          x
        </Button>
      </div>
    );
  }
}

// PropTypes
Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onTodoUpdate: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired
};

export default Todo;
