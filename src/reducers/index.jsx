import startNewGameViewReducer from "./startNewGameReducer";
import sessionReducer from "./sessions";
import userReducer from "./user";
import authReducer from "./authReducer";
import { firebaseReducer } from "react-redux-firebase";

import { combineReducers } from "redux";

const gameReducers = combineReducers({
  startNewGameView: startNewGameViewReducer,
  sessionState: sessionReducer,
  userState: userReducer,
  auth: authReducer,
  firebase: firebaseReducer
});

export default gameReducers;
