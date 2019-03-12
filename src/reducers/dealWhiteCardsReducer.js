import constants from './../constants';
const { types } = constants;

const dealWhiteCardsReducer = (state = {}, action) => {
  let newWhiteCardDeal;
  let newWhiteCardByID;

  switch (action.type) {

  case types.ADD_WHITE_CARD:
    const { whitecard, id } = action;
    let newWhiteCardByID = Object.assign({}, state, {
      [id]: {
        isFetching: true,
        whitecard: action.whitecard,
        id: action.id
      }
    });
    return newWhiteCardByID;


  case types.REMOVE_WHITE_CARD:
    return newState;


  default:
    return state;
  }
};

export default dealWhiteCardsReducer;
