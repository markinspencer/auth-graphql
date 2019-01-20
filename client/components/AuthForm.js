import React, { Component } from "react";

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;
    this.props.onSubmit({ email, password });
  }

  render() {
    const { email, password } = this.state;
    const { errors } = this.props;
    return (
      <div className="row">
        <form onSubmit={this.onSubmit.bind(this)} className="col s4">
          <div className="errors">
            {errors.map(error => (
              <div key={error}>{error}</div>
            ))}
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <button className="btn"> Submit </button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
