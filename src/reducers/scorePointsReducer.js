<<<<<<< HEAD
import * as ACTION_TYPES from '../constants/actionTypes';
=======
import constants from '../constants';
const { c } = constants;
>>>>>>> feature/refactor-attempt-react-redux-firebase

const scorePoints = (state = {}, action) => {

  switch (action.type) {

  case ACTION_TYPES.POINT_GIVEN:
    const { point } = action;
    let newPointScoreValue = state.pointScoreValue + 1;
    newState = {
      point: state.gameScoreValue
    };
    return newState;
  default:
    return state;
  }
};

export default scorePoints;
