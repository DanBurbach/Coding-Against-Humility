import constants from './../constants';
const { types } = constants;

const startNewGameReducer = (state = {}, action) => {

  switch (action.type) {

  case types.ADD_NEWGAME:
    const { name, gamelength, players, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        name: name,
        gamelength: gamelength,
        players: players,
        id: id
      }
    });
    return newState;
    case types.RESTART_GAME:
    return newState;
  default:
    return state;
  }
};

export default startNewGameReducer;
