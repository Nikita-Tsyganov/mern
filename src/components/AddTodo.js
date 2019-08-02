import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createTodo } from "../actions/postActions";

export class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const todo = {
      title: this.state.title
    };

    //call Action
    this.props.createTodo(todo);
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
  createTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = {
  createTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
