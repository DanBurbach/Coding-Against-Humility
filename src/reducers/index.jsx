import startNewGameViewReducer from "./startNewGameReducer";
// import scorePointsReducer from './scorePointsReducer';
// import dealBlackCardsReducer from './dealBlackCardsReducer';
// import dealWhiteCardsReducer from './dealWhiteCardsReducer';
// import gameLengthReducer from './gameLengthReducer';
// import numberOfPlayersReducer from './numberOfPlayersReducer';
import sessionReducer from "./sessions";
import userReducer from "./user";
import authReducer from "./authReducer";
import { firebaseReducer } from "react-redux-firebase";

import { combineReducers } from "redux";

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
