import React, { Component } from "react";
import { graphql } from "react-apollo";

import AuthForm from "./AuthForm";
import loginMutation from "../mutiations/login";
import currentUserQuery from "../queries/currentUser";

class LoginForm extends Component {
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query: currentUserQuery }]
    });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

export default graphql(loginMutation)(LoginForm);
