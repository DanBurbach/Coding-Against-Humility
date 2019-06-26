import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import firebase from "firebase/app";

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../../Firebase/context.js';
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

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
  }

  handleSignInFormSubmit = event => {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({...INITIAL_STATE});
        this.props.history.push(ROUTES.NEW_GAME_FORM);
      })
      .catch(error => {
        this.setState({ error });
      });
      event.preventDefault();
  };

  handleSignInUpdate = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event);
    console.log(this.state);
    console.log(firebase.auth().currentUser);
    console.log(firebase.auth().currentUser.uid);
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

const SignInForm = withRouter(withFirebase(SignInFormBase));

const enhance = connect(
  ({ firebase: { auth, profile } }) => ({ auth, profile,})
);

export default firebaseConnect()(enhance(SignInPage));