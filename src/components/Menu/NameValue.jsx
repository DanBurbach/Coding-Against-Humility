import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import firebase from '../../Firebase';

import { getNameFromFb } from "../../actions";

const userNameRef = firebase.database().ref();

class NameValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      userName: {}
=======
      player: ''
>>>>>>> feature/refactor-attempt-react-redux-firebase
    };
  }

  componentDidMount() {
    // this.props.dispatch(getNameFromFb(this.state));
    
    userNameRef.once('value')
      .then((snapshot) => {
        this.setState({userName: snapshot.child('gameInfo/userName').val()});
      });
  }


  render() {
    return (
      <div>
        <br />
        Your name is:{this.state.userName}
        <br />
      </div>
    );
  }
}

const enhance = connect(
  ({ firebase: { profile } }) => ({
    profile
  })
);

export default firebaseConnect()(enhance(NameValue));