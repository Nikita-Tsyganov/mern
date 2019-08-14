import React, { Component } from "react";
import Todo from "./TodoItem";
import { ListGroupItem } from "reactstrap";
import { connect } from "react-redux";
import { fetchTodos } from "../actions/actions.js";

export class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todos.items.map((todo, i) => {
          return (
            <ListGroupItem key={i}>
              <Todo todo={todo} />
            </ListGroupItem>
          );
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
