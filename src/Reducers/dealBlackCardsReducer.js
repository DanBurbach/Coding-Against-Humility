import constants from '../constants';
const { c } = constants;

const dealBlackCards = (state = {}, action) => {
  let dealBlackCards;

  switch (action.type) {

  case c.ADD_BLACK_CARD:
    const { blackcard, id } = action;
    let dealBlackCards = Object.assign({}, state, {
      [id]: {
        isFetching: true,
        whitecard: action.whitecard,
        id: action.id
      }
    });
    return dealBlackCards;

  case c.REMOVE_BLACK_CARD:
    return dealBlackCards;

  default:
    return state;
  }
};

export default dealBlackCards;
