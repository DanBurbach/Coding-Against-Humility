import * as ACTION_TYPES from '../constants/actionTypes';

export default (state = {}, action) => {
let newGame;
const { name, gamelength, players, id } = action;

  switch (action.type) {
  case ACTION_TYPES.ADD_NEWGAME:
    newGame = Object.assign({}, state, {
      [id]: {
        name: name,
        gamelength: gamelength,
        players: players,
        id: id
      }
    });
    return newGame;

  case ACTION_TYPES.RESTART_GAME:
    return newGame;

  default:
    return state;
  }
};
