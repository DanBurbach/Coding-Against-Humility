import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {

  switch (action.type) {

  case c.NUMBER_PLAYERS:
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
