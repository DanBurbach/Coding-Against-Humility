import React from 'react';
import constants from '../../constants';
const { c } = constants;
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';


function PlayersValue(numberOfPlayers){
  return (
    type: c.NUMBER_PLAYERS,
    players: numberOfPlayersFromFirebase
  );
}

const enhance = connect(
  ({ firebase: { auth, profile } }) => ({ auth, profile,})
)

export default firebaseConnect()(enhance(PlayersValue));
