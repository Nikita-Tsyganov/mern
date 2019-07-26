import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

export class TodoList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    //console.log(todos);
  }

  render() {
    const { todos } = this.props;
    console.log("this.props");
    console.log(this.props.todos);
    return (
      <div>
        {todos.items.map((todo, i) => {
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
  { fetchPosts }
)(TodoList);
