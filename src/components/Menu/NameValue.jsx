import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseConnect } from "react-redux-firebase";

class NameValue extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <br />
        Your name is:{this.props.profile.userName}
        <br />
      </div>
    );
  }
}

const enhance = connect(({ firebase: { profile } }) => ({
  profile
}));

export default firebaseConnect()(enhance(NameValue));
