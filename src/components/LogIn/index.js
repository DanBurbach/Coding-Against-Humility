import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
// import { connect } from 'react-redux';
// import { firebaseConnect } from 'react-redux-firebase';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',      
    error: null
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `An account with an E-Mail address to this social account already exists. Try to login from this account instead and associate your social accounts on your personal account page.`;

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
      error: null
    };
    this.handleSignInFormSubmit = this.handleSignInFormSubmit.bind(this);
    this.handleSignInUpdate = this.handleSignInUpdate.bind(this);
  }

  handleSignInFormSubmit(event) {
    const { email, password } = this.state;
    this.props.firebase
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({...INITIAL_STATE});
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
          if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
            error.message = ERROR_MSG_ACCOUNT_EXISTS;
          }
        this.setState({ error });
      });
      event.preventDefault();
  };

  handleSignInUpdate(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.handleSignInFormSubmit}>
        <input
          name="email"
          value={email}
          onChange = {this.handleSignInUpdate}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.handleSignInUpdate}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter, 
  withFirebase,)
(SignInFormBase);

export default SignInPage;
