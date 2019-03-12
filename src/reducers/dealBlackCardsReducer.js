import constants from './../constants';
const { types } = constants;

function dealBlackCardsReducer (state = {}, action) {

  switch (action.type) {

  case types.ADD_BLACK_CARD:
    const { blackcard, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        blackcard: blackcard,
        id: id
      }
    });
    return newState;
  case types.REMOVE_BLACK_CARD:
    newState = initialState;
    return newState;
  default:
    return state;
  }
}

export default dealBlackCardsReducer;
