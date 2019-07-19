import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header.js";
import TodoList from "./components/TodoList.js";
import AddTodo from "./components/AddTodo.js";
import About from "./components/views/About.js";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    this.readTodosPromise().then(todos =>
      this.setState({
        todos
      })
    );
  }

  // Create Todo
  createTodoPromise = title =>
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => res.data);

  // Read All Todos
  readTodosPromise = () =>
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => res.data);

  // Read Todo
  readTodoPromise = id =>
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => res.data);

  // Update Todo
  updateTodoPromise = todo =>
    axios
      .patch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        title: todo.title,
        completed: false
      })
      .then(res => res.data);

  // Delete Todo
  deleteTodoPromise = id =>
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => res.data);

  // Create Todo
  handleTodoCreate = title => {
    this.createTodoPromise(title).then(todo =>
      this.setState({
        todos: [...this.state.todos, todo]
      })
    );
  };

  // Update Todo
  handleTodoUpdate = updatedTodo => {
    this.updateTodoPromise(updatedTodo).then(todo =>
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === updatedTodo.id) todo.completed = !todo.completed;
          return todo;
        })
      })
    );
  };

  // Delete Todo
  handleTodoDelete = id => {
    this.deleteTodoPromise(id).then(todo =>
      this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id)
      })
    );
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo onTodoCreate={this.handleTodoCreate} />
                  <TodoList
                    todos={this.state.todos}
                    onTodoUpdate={this.handleTodoUpdate}
                    onTodoDelete={this.handleTodoDelete}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
