import * as ACTION_TYPES from '../constants/actionTypes';
import database from '../Firebase';

export const newGame = props => {
  return () => database.ref('gameInfo').push({
    userName: props.userName,
    gameLength: props.gameLength,
    numberOfPlayers: props.numberOfPlayers,
    gameWins: props.gameWins
  });
};

export const userName = (userName) => ({
  type: ACTION_TYPES.USER_NAME,
  userName
});