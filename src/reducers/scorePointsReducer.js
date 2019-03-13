import constants from './../constants';
const { c } = constants;

const scorePointsReducer = (state = {}, action) => {

  switch (action.type) {

  case c.POINT_GIVEN:
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

export default scorePointsReducer;
