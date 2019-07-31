import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import firebase from '../../Firebase';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../../Firebase/context';
import * as ROUTES from '../../constants/routes';

import '../../assets/styles/MainStyles.css';
import '../../assets/styles/Modal.css';
import '../../assets/styles/NewGameModal.css';
import '../../assets/styles/signInButton.css';


const SignInPage = () => (
  <div>
    <h1>Sign In</h1>
    <SignInForm />
    <SignUpLink />
    <PasswordForgetLink />
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
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.handleSignInFormSubmit}>
        <div className="sign-in-form-master">
          <div className="sign-in-form-child">
            <input
              name="email"
              value={email}
              onChange = {this.handleSignInUpdate}
              type="text"
              placeholder="Email Address"
            />
          </div>
           <div className = "sign-in-form-child">
            <input
              name="password"
              value={password}
              onChange={this.handleSignInUpdate}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className = "sign-in-form-child">
            <button className="signIn" disabled={isInvalid} type="submit">
              Sign In
            </button>
          </div>
        </div>
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