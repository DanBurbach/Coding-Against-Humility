import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
let newGame;
const { name, gamelength, players, id } = action;

  switch (action.type) {
  case c.ADD_NEWGAME:
    newGame = Object.assign({}, state, {
      [id]: {
        name: name,
        gamelength: gamelength,
        players: players,
        id: id
      }
    });
    return newGame;

  case c.RESTART_GAME:
    return newGame;

  default:
    return state;
  }
};
