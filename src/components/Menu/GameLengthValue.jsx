import React from 'react';
import constants from '../../constants';
const { c } = constants;


function GameLengthValue(gameLengthFromFirebase){
  return (
    type: c.USER_NAME,
    gamelength: gameLengthFromFirebase
  );
}

export default NameValue;
