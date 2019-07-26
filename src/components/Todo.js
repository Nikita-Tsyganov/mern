import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//connect is used to connect your components to the redux store that was provided by the provider component
import { updatePost } from "../actions/postActions";
import { deletePost } from "../actions/postActions";
import { fetchPosts } from "../actions/postActions";
import { reloadPosts } from "../actions/postActions";

export class TodoItem extends Component {
  componentDidMount() {
    // console.log(this.props);
  }
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
    //this.setState({ completed: this.props.todo.completed });
    // console.log(this.props.todo.completed);
    this.props.updatePost(this.props.todo);
  };

  handleDelete = e => {
    this.props.deletePost(this.props.todo._id);

    this.props.reloadPosts(
      this.props.todos.items.filter(todo => this.props.todo._id !== todo._id)
    );

    // console.log(this.props.todo._id);
    // console.log("filtered");
    // console.log(
    //   this.props.todos.items.filter(todo => this.props.todo._id !== todo._id)
    // );

    // console.log(this.props.todos.items);
  };

  render() {
    const { todo } = this.props;
    // console.log(todo);
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
  fetchPosts: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  todo: PropTypes.object
  // newPost: PropTypes.object
};

//mapStateToProps get state from redux , map to properties of our component, use the component
const mapStateToProps = state => ({
  todos: state.todos
});
//fetchPosts calls the fetch request
//second parethesis is the component
export default connect(
  mapStateToProps,
  { updatePost, deletePost, fetchPosts, reloadPosts }
)(TodoItem);
