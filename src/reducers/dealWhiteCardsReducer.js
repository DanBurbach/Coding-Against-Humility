import constants from './../constants';
const { c } = constants;

const dealWhiteCardsReducer = (state = {}, action) => {
  let dealWhiteCards;

  switch (action.type) {

  case c.ADD_WHITE_CARD:
    const { whitecard, id } = action;
    let dealWhiteCards = Object.assign({}, state, {
      [id]: {
        isFetching: true,
        whitecard: action.whitecard,
        id: action.id
      }
    });
    return dealWhiteCards;

  case c.REMOVE_WHITE_CARD:
    return dealWhiteCards;

  default:
    return state;
  }
};

export default dealWhiteCardsReducer;
