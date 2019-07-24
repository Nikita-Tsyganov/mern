import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header.js";
import Todo from "./components/Todo.js";
import AddTodo from "./components/AddTodo.js";
import About from "./components/views/About.js";
import "./App.scss";
import { Provider } from "react-redux";

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import DB from "./database/DB.js";
import store from "./store";

class App extends Component {
  // state = {
  //   todos: []
  // };

  componentDidMount() {
    // DB.all().then(todos =>
    //   this.setState({
    //     todos
    //   })
    // );
  }

  // Create Todo
  // handleTodoCreate = title => {
  //   DB.create(title).then(todo =>
  //     this.setState({
  //       todos: [...this.state.todos, todo]
  //     })
  //   );
  // };

  // Update Todo
  // handleTodoUpdate = updatedTodo => {
  //   DB.update(updatedTodo).then(todo =>
  //     this.setState({
  //       todos: this.state.todos.map(todo => {
  //         if (todo._id === updatedTodo._id) todo.completed = !todo.completed;
  //         return todo;
  //       })
  //     })
  //   );
  // };

  // Delete Todo
  // handleTodoDelete = id => {
  //   DB.delete(id).then(todo =>
  //     this.setState({
  //       todos: this.state.todos.filter(todo => todo._id !== id)
  //     })
  //   );
  // };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="container">
              <Header />
              <Route
                exact
                path="/"
                render={props => (
                  <React.Fragment>
                    {/* <AddTodo onTodoCreate={this.handleTodoCreate} /> */}
                    <AddTodo />
                    <div>
                      {/* {this.state.todos.map(todo => (
                        <Todo
                          key={todo._id}
                          todo={todo}
                          onTodoUpdate={this.handleTodoUpdate}
                          onTodoDelete={this.handleTodoDelete}
                        />
                      ))} */}
                      <Todo />
                    </div>
                  </React.Fragment>
                )}
              />
              <Route path="/about" component={About} />
            </div>
            <PostForm />
            <hr />
            <Posts />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
