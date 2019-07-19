import React, { Component } from "react";
import Header from "./components/layout/Header.js";
import TodoList from "./components/TodoList.js";
import AddTodo from "./components/AddTodo.js";
//import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import uuid from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Dinner with wife",
        completed: true
      },
      {
        id: uuid.v4(),
        title: "Meeting with boss",
        completed: false
      }
    ]
  };

  // Create Todo
  handleCreate = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  // Update Todo
  handleUpdate = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    });
  };

  // Delete Todo
  handleDelete = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo onCreate={this.handleCreate} />
          <TodoList
            todos={this.state.todos}
            onUpdate={this.handleUpdate}
            onDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
