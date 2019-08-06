import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header.js";
import Todo from "./components/Todo.js";
import AddTodo from "./components/AddTodo.js";
import About from "./components/views/About.js";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
//import "./App.scss";
import DB from "./database/DB.js";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import "tachyons";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    DB.all().then(todos =>
      this.setState({
        todos
      })
    );
  }

  // Create Todo
  handleTodoCreate = title => {
    DB.create(title).then(todo =>
      this.setState({
        todos: [...this.state.todos, todo]
      })
    );
  };

  // Update Todo
  handleTodoUpdate = updatedTodo => {
    DB.update(updatedTodo).then(todo =>
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo._id === updatedTodo._id) todo.completed = !todo.completed;
          return todo;
        })
      })
    );
  };

  // Delete Todo
  handleTodoDelete = id => {
    DB.delete(id).then(todo =>
      this.setState({
        todos: this.state.todos.filter(todo => todo._id !== id)
      })
    );
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Container className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo onTodoCreate={this.handleTodoCreate} />
                  <ListGroup>
                    {this.state.todos.map(todo => (
                      <ListGroupItem key={todo._id}>
                        <Todo
                          todo={todo}
                          onTodoUpdate={this.handleTodoUpdate}
                          onTodoDelete={this.handleTodoDelete}
                        />
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/register" component={Register} />
            <Route path="/signin" component={SignIn} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
