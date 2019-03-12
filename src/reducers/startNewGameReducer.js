import constants from './../constants';
const { types } = constants;

function startNewGameReducer (state = {}, action) {

  switch (action.type) {

  case types.ADD_NEWGAME:
    const { name, gamelength, players, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        name: action.name,
        gamelength: action.gamelength,
        players: action.players,
        id: action.id
      }
    });
    return newState;

  case types.RESTART_GAME:
    return newState;

  default:
    return state;
  }
}

export default startNewGameReducer;
