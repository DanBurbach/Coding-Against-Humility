import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';


class NameValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: this.props.auth.displayName
    };
  }

  render() {
    return (
      <div>
        <p/>
          {this.props.auth.displayName}
      </div>
    );
  }
}

const enhance = connect(({ firebase: { auth, profile } }) => ({
  auth,
  profile
}));


export default firebaseConnect()(enhance(NameValue));