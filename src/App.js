import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header.js";
import AddTodo from "./components/AddTodo.js";
import About from "./components/views/About.js";
import TodoList from "./components/TodoList";
import "./App.scss";
import { connect } from "react-redux";
import { fetchTodos } from "./actions/postActions";

class App extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="App">
            <div className="container">
              <Header />
              <Route
                exact
                path="/"
                render={props => (
                  <React.Fragment>
                    <AddTodo />
                    <TodoList />
                  </React.Fragment>
                )}
              />
              <Route path="/about" component={About} />
            </div>
          </div>
        </Router>
      </React.Fragment>
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
)(App);
