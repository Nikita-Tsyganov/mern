import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button } from "reactstrap";

export class AddTodo extends Component {
  state = {
    title: " "
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    this.props.onTodoCreate(this.state.title);
    this.setState({ title: "" });
  };

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
          style={{ border: "1px solid #ced4da" }}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  onTodoCreate: PropTypes.func.isRequired
};

export default AddTodo;
