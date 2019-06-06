import * as ACTION_TYPES from "../constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.NUMBER_PLAYERS:
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
