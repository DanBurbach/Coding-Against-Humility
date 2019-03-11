import startNewGameReducer from './startNewGameReducer';
import scorePointsReducer from './scorePointsReducer';
import dealBlackCardsReducer from './dealBlackCardsReducer';
import dealWhiteCardsReducer from './dealWhiteCardsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  dealBlackCards: dealBlackCardsReducer,
  dealWhiteCards: dealWhiteCardsReducer,
  scorePoints: scorePointsReducer,
  startNewGame: startNewGameReducer
});

export default rootReducer;
