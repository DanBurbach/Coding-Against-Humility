import constants from './../constants';
const { types } = constants;

const userNameReducer = (state = {}, action) => {

  switch (action.type) {

  case types.USER_NAME:
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

export default userNameReducer;
