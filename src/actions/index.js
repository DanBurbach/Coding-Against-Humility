import * as ACTION_TYPES from "../constants/actionTypes";

export const newGame = props => {
  return (dispatch, getState, firebase) => firebase.database().ref('gameInfo').push({
    userName: props.userName,
    gameLength: props.gameLength,
    numberOfPlayers: props.numberOfPlayers,
    gameWins: props.gameWins
  });
}

export const userName = (userName) => ({
  type: ACTION_TYPES.USER_NAME,
  userName
});