import constants from './../constants';
const { types } = constants;

const dealWhiteCardsReducer = (state = {}, action) => {

  switch (action.type) {

  case types.ADD_WHITE_CARD:
    const { whitecard, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        whitecard: whitecard,
        id: id
      }
    });
    return newState;
    case types.REMOVE_WHITE_CARD:
    newState = initialState;
    return newState
  default:
    return state;
  }
};

export default dealWhiteCardsReducer;
