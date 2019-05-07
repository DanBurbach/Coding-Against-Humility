export function newGame (props) {
  return (dispatch, getState, firebase) => firebase.database().ref('gameInfo').push({
    userName: props.userName,
    gameLength: props.gameLength,
    numberOfPlayers: props.numberOfPlayers,
    gameWins: props.gameWins
  });
}

export const userName = (userName) => ({
  type: c.USER_NAME,
  userName
});