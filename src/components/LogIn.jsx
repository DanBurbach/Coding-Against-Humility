import React, { Component } from 'react';
import firebase from './../constants/firebaseConfig';
import withFirebaseAuth from 'react-auth-firebase';
import PropTypes from 'prop-types';

class Login extends Component {
  render(props) {
    const {
      signInWithGoogle,
      googleAccessToken,
      signOut,
      user,
      error
    } = this.props;

    const { email, password } = this.state;

    return (
      <div>
        <button onClick={signInWithGoogle}>Signin with Google</button>
      </div>
    );
  }
}
const authconfig = {
  google: {
    returnAccessToken: true,
    saveUserInDatabase: true
  }
};


export default withFirebaseAuth(Login, firebase, authconfig);
