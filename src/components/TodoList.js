import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import { reloadPosts } from "../actions/postActions";

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

export default connect(
  mapStateToProps,
  { fetchPosts, reloadPosts }
)(TodoList);
