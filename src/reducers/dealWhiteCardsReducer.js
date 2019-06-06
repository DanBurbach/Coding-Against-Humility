import * as ACTION_TYPES from '../constants/actionTypes';

const dealWhiteCardsReducer = (state = {}, action) => {

  switch (action.type) {

  case ACTION_TYPES.ADD_WHITE_CARD:
    const { whitecard, id } = action;
    let dealWhiteCards = Object.assign({}, state, {
      [id]: {
        isFetching: true,
        whitecard: action.whitecard,
        id: action.id
      }
    });
    return dealWhiteCards;

  case ACTION_TYPES.REMOVE_WHITE_CARD:
    return dealWhiteCards;

  default:
    return state;
  }
};

export default dealWhiteCardsReducer;
