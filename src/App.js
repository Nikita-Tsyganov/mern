import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header.js";
import AddTodo from "./components/AddTodo.js";
import About from "./components/views/About.js";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
//import "./App.scss";
import { Container, ListGroup } from "reactstrap";
import "tachyons";
import TodoList from "./components/TodoList";
import { connect } from "react-redux";
import { fetchTodos } from "./actions/actions.js";

class App extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

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
                    <AddTodo />
                    <ListGroup>
                    <TodoList />
                    </ListGroup>
                  </React.Fragment>)}
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
