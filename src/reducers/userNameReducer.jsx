import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {

  switch (action.type) {

  case c.USER_NAME:
    const { name, id } = action;
    let userName = Object.assign({}, state, {
      [id]: {
        name: name,
        id: id
      }
    });
    return userName;
  default:
    return state;
  }
};
