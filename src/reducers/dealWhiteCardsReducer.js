import constants from './../constants';
const { types } = contants;

export default (state = {}, action) => {

  switch (action.type) {

  case 'ADD_WHITE_CARD':
    const { whitecard, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        whitecard: whitecard,
        id: id
      }
    });
    return newState;
    case 'REMOVE_WHITE_CARD':
    newState = initialState;
    return newState
  default:
    return state;
  }
};
