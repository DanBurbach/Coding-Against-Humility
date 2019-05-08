import * as ACTION_TYPES from "../constants/actionTypes";

const gameLengthReducer = (state = {}, action) => {

  switch (action.type) {
    case ACTION_TYPES.GAME_LENGTH:
      const { gamelength } = action;
      let gameLength = Object.assign({}, state, {
        [id]: {
          gamelength: gamelength,
          id: id
        }
      });
      return gameLength;

    default:
      return state;
  }
};

export default gameLengthReducer;
