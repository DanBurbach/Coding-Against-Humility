import * as ACTION_TYPES from "../constants/actionTypes";

export default (state = {}, action) => {

  switch (action.type) {
    case ACTION_TYPES.USER_NAME:
      let userName = Object.assign({}, state);
      userName[action.name.id] = action.name;
      return userName;
    default:
      return state;
  }
};
