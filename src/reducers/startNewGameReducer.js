import constants from './../constants';
const { types } = constants;

const startNewGameReducer = (state = {}, action) => {

  switch (action.type) {

  case types.ADD_NEWGAME:
    const { name, gamelength, players, id } = action;
    let newGame = Object.assign({}, state, {
      [id]: {
        name: name,
        gamelength: gamelength,
        players: players,
        id: id
      }
    });
    return newGame;

  case types.RESTART_GAME:
    return newGame;

  default:
    return state;
  }
};

export default startNewGameReducer;
