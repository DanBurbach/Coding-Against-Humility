import startNewGameViewReducer from './startNewGameReducer';
// import scorePointsReducer from './scorePointsReducer';
// import dealBlackCardsReducer from './dealBlackCardsReducer';
// import dealWhiteCardsReducer from './dealWhiteCardsReducer';
// import gameLengthReducer from './gameLengthReducer';
// import numberOfPlayersReducer from './numberOfPlayersReducer';
import sessionReducer from "./sessions";
import userReducer from "./user";
import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from "react-redux-firebase";

const gameReducers = combineReducers({
  // dealBlackCards: dealBlackCardsReducer,
  // dealWhiteCards: dealWhiteCardsReducer,
  // scorePoints: scorePointsReducer,
  startNewGameView: startNewGameViewReducer,
  // gameLength: gameLengthReducer,
  // numberOfPlayers: numberOfPlayersReducer,
  sessionState: sessionReducer,
  userState: userReducer,
  auth: authReducer,
  firebase: firebaseReducer
});

export default gameReducers;
