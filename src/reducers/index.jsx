import {startNewGameView} from './startNewGameReducer';
import scorePointsReducer from './scorePointsReducer';
import dealBlackCardsReducer from './dealBlackCardsReducer';
import dealWhiteCardsReducer from './dealWhiteCardsReducer';
import gameLengthReducer from './gameLengthReducer';
import numberOfPlayersReducer from './numberOfPlayersReducer';
import userNameReducer from './userNameReducer';
import { combineReducers } from 'redux';
import sessionReducer from "./sessions";
import userReducer from "./user";

const gameReducers = combineReducers({
  dealBlackCards: dealBlackCardsReducer,
  dealWhiteCards: dealWhiteCardsReducer,
  scorePoints: scorePointsReducer,
  startNewGameView,
  gameLength: gameLengthReducer,
  numberOfPlayers: numberOfPlayersReducer,
  userName: userNameReducer,
  sessionState: sessionReducer,
  userState: userReducer,
});

export default gameReducers;
