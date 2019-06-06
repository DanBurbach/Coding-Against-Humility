import * as ACTION_TYPES from '../constants/actionTypes';

export const newGame = props => {
  return (dispatch, getState, firebase) => {
    const userId = firebase.auth().currentUser.uid;
    this.props.firebase.database().ref(`gameInfo/${userId}`).set({
      userName: props.userName,
      gameLength: props.gameLength,
      numberOfPlayers: props.numberOfPlayers,
      gameWins: props.gameWins
    });
  };
};


export const userName = (userName) => ({
  type: c.USER_NAME,
  userName
});

