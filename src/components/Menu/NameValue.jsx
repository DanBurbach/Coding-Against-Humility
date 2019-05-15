import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import { getNameFromFb } from "../../actions";


class NameValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    };
  }

  componentDidMount() {
    this.props.dispatch(getNameFromFb(this.state));
    
    // userNameRef.once('value')
    //   .then((snapshot) => {
    //     this.setState({userName: snapshot.child('gameInfo/userName').val()});
    //   });
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

const enhance = connect(({ firebase: { auth, profile } }) => ({
  auth,
  profile
}));


export default firebaseConnect()(enhance(NameValue));