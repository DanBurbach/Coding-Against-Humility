import constants from './../constants';
const { types } = contants;

export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_NEWGAME':
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
    case 'RESTART_GAME':
    newState = initialState;
    return newState
  default:
    return state;
  }
};
