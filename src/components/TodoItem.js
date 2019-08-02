import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateTodo, deleteTodo } from "../actions/postActions";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

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
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={this.handleCompletedToggle}
            style={checkboxStyle}
          />
          {todo.title}
          <button style={btnStyle} onClick={this.handleDelete}>
            x
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

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
