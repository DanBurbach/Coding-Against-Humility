import constants from './../constants';
const { types } = constants;

const dealWhiteCardsReducer = (state = {}, action) => {
  let dealWhiteCards;

  switch (action.type) {

  case types.ADD_WHITE_CARD:
    const { whitecard, id } = action;
    let dealWhiteCards = Object.assign({}, state, {
      [id]: {
        isFetching: true,
        whitecard: action.whitecard,
        id: action.id
      }
    });
    return dealWhiteCards;

  case types.REMOVE_WHITE_CARD:
    return dealWhiteCards;

  default:
    return state;
  }
};

export default dealWhiteCardsReducer;
