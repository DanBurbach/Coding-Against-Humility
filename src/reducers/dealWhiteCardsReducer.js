<<<<<<< HEAD
import * as ACTION_TYPES from '../constants/actionTypes';

const dealWhiteCardsReducer = (state = {}, action) => {
=======
import constants from '../constants';
const { c } = constants;

const dealWhiteCards = (state = {}, action) => {
  let dealWhiteCards;
>>>>>>> feature/refactor-attempt-react-redux-firebase

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

export default dealWhiteCards;
