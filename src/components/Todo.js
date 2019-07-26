import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//connect is used to connect your components to the redux store that was provided by the provider component
import { updatePost } from "../actions/postActions";
import { deletePost } from "../actions/postActions";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      // textDecoration: this.props.todo.completed ? "line-through" : "none"
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  handleCompletedToggle = e => {
    // const array = this.props.posts;
    // console.log(`e.target.name`);
    // const i = e.target.id;
    // const index = array.findIndex(iz => iz._id === i);
    // console.log(array[index].completed);
    // array[index].completed = !array[index].completed;
    // this.props.updatePost(this.props.posts[index]);
    this.props.todo.completed = !this.props.todo.completed;
    console.log(this.props.todo.completed);
  };

  render() {
    const { todo } = this.props;
    console.log("current props");
    console.log(todo);
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={this.handleCompletedToggle}
          style={checkboxStyle}
        />
        {todo.title}
        <button style={btnStyle}>x</button>
      </div>
    );
  }
}

// // PropTypes
// TodoItem.propTypes = {
//   todo: PropTypes.object.isRequired,
//   onTodoUpdate: PropTypes.func.isRequired,
//   onTodoDelete: PropTypes.func.isRequired
// };

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
  updatePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  todo: PropTypes.object
  // newPost: PropTypes.object
};

//mapStateToProps get state from redux , map to properties of our component, use the component
const mapStateToProps = state => ({
  currentTodo: state.todos.item
});
//fetchPosts calls the fetch request
//second parethesis is the component
export default connect(
  null,
  { updatePost, deletePost }
)(TodoItem);
