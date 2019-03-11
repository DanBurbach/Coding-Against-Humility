import constants from './../constants';
const { types } = contants;

const scorePointsReducer = (state = {}, action) => {

  switch (action.type) {

  case 'POINT_GIVEN':
    const { point } = action;
    let newPointScoreValue = state.pointScoreValue + 1
    newState = {
      gameScoreValue: state.gameScoreValue
    }
    return newState;

  default:
    return state;
  }
};

export default scorePointsReducer;
