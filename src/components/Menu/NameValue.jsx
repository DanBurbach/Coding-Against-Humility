import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseConnect } from "react-redux-firebase";

class NameValue extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      userName: ''
    };
  }

  render() {
    return (
    <div>{this.state.gameInfo.userName}</div>
    )
  }
}

const enhance = connect(({ firebase: { profile } }) => ({
  profile
}));

export default firebaseConnect()(enhance(NameValue));
