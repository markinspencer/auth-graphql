import React, { Component } from "react";

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    const { email, password } = this.state;
    return (
      <div className="row">
        <form className="col s4">
          <div className="input-field">
            <label htmlFor=""> Email </label>
            <input
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
              type="text"
            />
          </div>
          <div className="input-field">
            <label htmlFor=""> Password </label>
            <input
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
              type="text"
            />
          </div>
          <button className="btn"> Submit </button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
