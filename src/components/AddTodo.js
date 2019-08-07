import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { createTodo } from "../actions/actions.js"

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

    this.setState({title:""});
  }

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="mt-2 mb-2"
        style={{ display: "flex" }}
      >
        <Input
          type="text"
          name="title"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.handleChange}
        />
        <Button
          type="submit"
          value="Submit"
          color="light"
          className="rounded-circle"
          style={{
            color: "#888",
            border: "1px solid #ced4da",
            marginLeft: "-20px"
          }}
        >
          +
        </Button>
      </Form>
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
