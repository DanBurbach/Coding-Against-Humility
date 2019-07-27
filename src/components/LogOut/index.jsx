import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { withRouter } from "react-router-dom";
import firebase from "../../Firebase";

import "../../assets/styles/LogOutButton.css";

class SignOutButton extends Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

handleLogOut = (event) => {
    event.preventDefault();
    firebase.doSignOut;
    this.props.history.push('/');
  };

render() {
    return (
      <div className='logOut'>
        <button id='logOutButton' onClick={this.handleLogOut}>
          Sign Out
        </button>
      </div>
    );
    }
}

const enhance = compose(
  withRouter,
  connect(({ firebase: { auth, profile } }) => ({ auth, profile }))
);

export default firebaseConnect()(enhance(SignOutButton));