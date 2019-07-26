import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";
import { reloadPosts } from "../actions/postActions";

export class AddTodo extends Component {
  // state = {
  //   title: " "
  // };

  constructor() {
    super();
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handleChange = e => this.setState({ [e.target.name]: e.target.value });
  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.onTodoCreate(this.state.title);
  //   this.setState({ title: "" });
  // };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const todo = {
      title: this.state.title
    };
    // console.log("submitting");
    // console.log(post);

    //call Action
    this.props.createPost(todo);
    const updatedTodos = Array.from(this.props.todos.items);
    updatedTodos.push(todo);
    console.log("updatedTodos");
    console.log(updatedTodos);
    this.props.reloadPosts(updatedTodos);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  // onTodoCreate: PropTypes.func.isRequired
  createPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

// export default AddTodo;
export default connect(
  mapStateToProps,
  { createPost, reloadPosts }
)(AddTodo);
