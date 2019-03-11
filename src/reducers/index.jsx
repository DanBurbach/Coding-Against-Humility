import codingAgainstHumilityReducer from './coding-against-humility-reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  codingAgainstHumility: codingAgainstHumilityReducer
});

export default rootReducer;
