import constants from './../constants';
const { types } = constants;

function scorePointsReducer (state = {}, action) {

  switch (action.type) {

  case types.POINT_GIVEN:
    const { point } = action;
    let newPointScoreValue = state.pointScoreValue + 1;
    newState = {
      gameScoreValue: state.gameScoreValue
    };
    return newState;
  default:
    return state;
  }
};

export default scorePointsReducer;
