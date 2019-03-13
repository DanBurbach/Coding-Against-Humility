import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {

  switch (action.type) {

  case c.USER_NAME:
    let userName = Object.assign({}, state);
    userName[action.name.id] = action.name
    return userName;
  default:
    return state;
  }
};
