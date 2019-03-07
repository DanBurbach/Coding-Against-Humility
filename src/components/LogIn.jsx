import React, { Component } from 'react';
import firebase from './../constants/firebaseConfig';
import withFirebaseAuth from 'react-auth-firebase';


class Login extends Component {
  render() {
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
        <form onSubmit={e => e.preventDefault()}>
          ...form input to take email and password for sign in
          <button
            type="submit"
            onClick={() => signInWithEmail(email, password)}
          >
            SignIn
          </button>
        </form>
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
