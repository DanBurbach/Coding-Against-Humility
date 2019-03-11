import startNewGameReducer from './startNewGameReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  codingAgainstHumility: codingAgainstHumilityReducer
});

export default rootReducer;
