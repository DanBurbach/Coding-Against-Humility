import React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import constants from '../../constants';
const { c } = constants;


function GameLengthValue(gameLengthFromFirebase){
  return (
    type: c.USER_NAME,
    gamelength: gameLengthFromFirebase
  );
}

const enhance = connect(
  ({ firebase: { auth, profile } }) => ({ auth, profile,})
)

export default firebaseConnect()(enhance(NameValue));
