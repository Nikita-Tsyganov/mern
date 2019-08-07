import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { updateTodo, deleteTodo } from "../actions/actions.js";

export class TodoItem extends Component {
  handleCompletedToggle = e => {
    this.props.todo.completed = !this.props.todo.completed;
    this.props.updateTodo(this.props.todo);
  };

  handleDelete = e => {
    this.props.deleteTodo(this.props.todo._id);
  };

  render() {
    const { todo } = this.props;
    return (
      <div style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={this.handleCompletedToggle}
          style={{ cursor: "pointer" }}
        />
        {todo.title}
        <Button
          type="button"
          color="danger"
          size="sm"
          className="rounded-circle"
          style={{ float: "right", lineHeight: "0.93rem" }}
          onClick={this.handleDelete}
        >
          x
        </Button>
      </div>
    );
  }
}

const checkboxStyle = {
  cursor: "pointer"
};

// export default TodoItem;
TodoItem.propTypes = {
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todo: PropTypes.object
};

//mapStateToProps get state from redux , map to properties of our component, use the component
const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = {
  updateTodo,
  deleteTodo
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);

