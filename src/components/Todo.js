import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//connect is used to connect your components to the redux store that was provided by the provider component
import { fetchPosts } from "../actions/postActions";
import { updatePost } from "../actions/postActions";
import { deletePost } from "../actions/postActions";

export class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      todo: {}
    };
  }
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      // textDecoration: this.props.todo.completed ? "line-through" : "none"
      textDecoration: this.props.posts.completed ? "line-through" : "none"
    };
  };

  componentWillMount() {
    this.props.fetchPosts();
  }
  // handleCompletedToggle = e => {
  //   const updatedTodo = { ...this.props.todo };
  //   updatedTodo.completed = !updatedTodo.completed;
  //   this.props.onTodoUpdate(updatedTodo);
  // };

  handleCompletedToggle = e => {
    //const updatedTodo = { ...this.props.posts };
    //updatedTodo.completed = !updatedTodo.completed;
    const completed = e.target.checked;
    const array = this.props.posts;
    console.log(`e.target.name`);
    //console.log(this.props.posts.findIndex(e.target.id));
    const i = e.target.id;

    //console.log(array.findIndex(iz => iz.id === i));
    const index = array.findIndex(iz => iz._id === i);
    // console.log(array.findIndex(iz => iz._id === i));
    //console.log(e.target.id);
    //if(e.target.name === this.props.id)
    this.props.posts[index].completed = !this.props.posts[index].completed;
    this.props.updatePost(this.props.posts[index]);
    //updatePost(this.props.posts[index]);
  };

  render() {
    // const { _id, title, completed } = this.props.todo;
    const postItems = this.props.posts.map(post => (
      <div>
        <p>
          <input
            id={post._id}
            type="checkbox"
            checked={post.completed}
            onChange={this.handleCompletedToggle}
            style={checkboxStyle}
          />
          <h3>{post.title}</h3>
          <button
            style={btnStyle}
            onClick={() => this.props.deletePost(post._id)}
          >
            x
          </button>
        </p>
      </div>
    ));
    return (
      <div style={this.getStyle()}>
        {postItems}
        {/* <input
            type="checkbox"
            // checked={completed}
            // onChange={this.handleCompletedToggle}
            style={checkboxStyle} 
          />*/}{" "}
        {/* {title}
          {/* <h1>Posts</h1>
          {postItems} */}
        {/* <button onClick={() => this.props.onTodoDelete(_id)} style={btnStyle}> */}
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
  fetchPosts: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

//mapStateToProps get state from redux , map to properties of our component, use the component
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});
//fetchPosts calls the fetch request
//second parethesis is the component
export default connect(
  mapStateToProps,
  { fetchPosts, updatePost, deletePost }
)(TodoItem);
