import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header.js";
import AddTodo from "./components/AddTodo.js";
import About from "./components/views/About.js";
import "./App.scss";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import DB from "./database/DB.js";
import store from "./store";
import TodoList from "./components/TodoList";
import { fetchPosts } from "./actions/postActions";

class App extends Component {
  render() {
    //console.log(todos);
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
                    {/* <AddTodo /> */}
                    <TodoList />
                  </React.Fragment>
                )}
              />
              <Route path="/about" component={About} />
            </div>
            {/* <PostForm />
            <hr />
            <Posts /> */}
          </div>
        </Router>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  null,
  {}
)(App);
