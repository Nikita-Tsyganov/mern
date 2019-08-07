import React, { Component } from "react";
import DB from "../database/DB.js";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }
  onNameChange = event => {
    this.setState({ name: event.target.value });
  };
  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitRegister = () => {
    // fetch("https://bluesquare.herokuapp.com/register", {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     email: this.state.email,
    //     password: this.state.password,
    //     name: this.state.name
    //   })
    // })
    //   .then(response => response.json())
    //   .then(user => {
    //     if (user.id) {
    //       this.props.loadUser(user);
    //       this.props.onRouteChange("home");
    //     }
    //   })
    //   .catch(err => console.log(err));
    // //this.props.onRouteChange("home");
    let name = this.state.name;
    let email = this.state.email;
    let password = this.state.password;
    DB.createUser(name, email, password);
  };

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  //   className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="name"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  //   className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  //   className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
                onClick={this.onSubmitRegister}
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
