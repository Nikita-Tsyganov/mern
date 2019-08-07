import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from "reactstrap";

export default class Header extends Component {
  state = {
    isHeaderOpen: false
  };
  toggleHeader = () => {
    this.setState({
      isHeaderOpen: !this.state.isHeaderOpen
    });
  };
  render() {
    return (
      <Navbar color="light" light expand="md" className="rounded">
        <Link to="/" className="navbar-brand">
          TodoList
        </Link>
        <NavbarToggler onClick={this.toggleHeader} />
        <Collapse isOpen={this.state.isHeaderOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/Nikita-Tsyganov/mern">
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/signin" className="nav-link">
                Sign in
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
