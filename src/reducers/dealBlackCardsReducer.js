import constants from './../constants';
const { types } = constants;

const dealBlackCardsReducer = (state = {}, action) => {
  let dealBlackCards;

  switch (action.type) {

  case types.ADD_BLACK_CARD:
    const { blackcard, id } = action;
    let dealBlackCards = Object.assign({}, state, {
      [id]: {
        isFetching: true,
        whitecard: action.whitecard,
        id: action.id
      }
    });
    return dealBlackCards;

  case types.REMOVE_BLACK_CARD:
    return dealBlackCards;

  default:
    return state;
  }
};

export default dealBlackCardsReducer;
