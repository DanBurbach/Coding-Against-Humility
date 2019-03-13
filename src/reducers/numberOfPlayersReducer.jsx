import constants from './../constants';
const { types } = constants;

const numberOfPlayersReducer = (state = {}, action) => {

  switch (action.type) {

  case types.NUMBER_PLAYERS:
    const { players } = action;
    let numberPlayers = Object.assign({}, state, {
      [id]: {
        players: players,
        id: id
      }
    });
    return numberPlayers;

  default:
    return state;
  }
};

export default numberOfPlayersReducer;
