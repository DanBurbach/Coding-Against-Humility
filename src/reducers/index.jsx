<<<<<<< HEAD
import {startNewGameView} from './startNewGameReducer';
import scorePointsReducer from './scorePointsReducer';
import dealBlackCardsReducer from './dealBlackCardsReducer';
import dealWhiteCardsReducer from './dealWhiteCardsReducer';
import gameLengthReducer from './gameLengthReducer';
import numberOfPlayersReducer from './numberOfPlayersReducer';
import userNameReducer from './userNameReducer';
import { combineReducers } from 'redux';

const gameReducers = combineReducers({
  dealBlackCards: dealBlackCardsReducer,
  dealWhiteCards: dealWhiteCardsReducer,
  scorePoints: scorePointsReducer,
  startNewGameView,
  gameLength: gameLengthReducer,
  numberOfPlayers: numberOfPlayersReducer,
  userName: userNameReducer
});
=======
import { startNewGame } from "./startNewGameReducer";
import { scorePoints } from './scorePointsReducer';
import { dealBlackCards } from './dealBlackCardsReducer';
import { dealWhiteCards } from './dealWhiteCardsReducer';

const gameReducers = {
  dealBlackCards,
  dealWhiteCards,
  scorePoints,
  startNewGame
};
>>>>>>> feature/refactor-attempt-react-redux-firebase

export default gameReducers;
