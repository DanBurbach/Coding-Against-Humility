import * as ACTION_TYPES from '../constants/actionTypes';

const dealBlackCardsReducer = (state = {}, action) => {

  switch (action.type) {

    case ACTION_TYPES.ADD_BLACK_CARD:
      const {
        blackcard, id
      } = action;
      let dealBlackCards = Object.assign({}, state, {
        [id]: {
          isFetching: true,
          whitecard: action.whitecard,
          id: action.id
        }
      });
      return dealBlackCards;

    case ACTION_TYPES.REMOVE_BLACK_CARD:
      return dealBlackCards;

    default:
      return state;
  }
};

export default dealBlackCardsReducer;