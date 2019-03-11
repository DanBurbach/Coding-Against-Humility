import constants from './../constants';
const { types } = contants;

export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_BLACK_CARD':
    const { blackcard, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        blackcard: blackcard
        id: id
      }
    });
    return newState;
    case 'REMOVE_BLACK_CARD':
    newState = initialState;
    return newState
  default:
    return state;
  }
};
