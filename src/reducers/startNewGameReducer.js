<<<<<<< HEAD
import * as ACTION_TYPES from '../constants/actionTypes';

export const startNewGameView = (state = {}, action) => {
let newGame;
const { name, gamelength, players, id } = action;

  switch (action.type) {
  case ACTION_TYPES.ADD_NEWGAME:
    newGame = Object.assign({}, state, {
=======
import constants from '../constants';
const { c } = constants;

const startNewGame = (state = {}, action) => {
  let NewGame;
  switch (action.type) {
    
  case c.ADD_NEWGAME:
    const { userName, gameLength, numberOfPlayers, gameWins, id } = action;

    NewGame = Object.assign({}, state, {
>>>>>>> feature/refactor-attempt-react-redux-firebase
      [id]: {
        userName: userName,
        gameLength: gameLength,
        numberOfPlayers: numberOfPlayers,
        gameWins: gameWins,
        id: id
      }
    });
    return NewGame;

<<<<<<< HEAD
  case ACTION_TYPES.RESTART_GAME:
    return newGame;

=======
  case c.RESTART_GAME:
    return NewGame;
>>>>>>> feature/refactor-attempt-react-redux-firebase
  default:
    return state;
  }
};

<<<<<<< HEAD
export default startNewGameView;
=======
export default startNewGame;
>>>>>>> feature/refactor-attempt-react-redux-firebase
