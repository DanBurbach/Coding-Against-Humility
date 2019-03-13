import constants from './../constants';
const { c } = constants;

const gameLengthReducer = (state = {}, action) => {

  switch (action.type) {

  case c.GAME_LENGTH:
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
