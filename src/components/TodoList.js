import React, { Component } from "react";
import Todo from "./TodoItem";
import { connect } from "react-redux";
import { fetchTodos } from "../actions/postActions";

export class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todos.items.map((todo, i) => {
          return <Todo key={i} todo={todo} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = {
  fetchTodos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
