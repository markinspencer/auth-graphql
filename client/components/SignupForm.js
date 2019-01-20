import React, { Component } from "react";
import { graphql } from "react-apollo";

import AuthForm from "./AuthForm";
import signupMutation from "../mutiations/signup";
import currentUserQuery from "../queries/currentUser";

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };
  }

  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query: currentUserQuery }]
      })
      .catch(err => {
        const errors = err.graphQLErrors.map(error => error.message);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <div>
        <h3>Signup</h3>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(signupMutation)(SignupForm);
