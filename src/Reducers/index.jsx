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

export default gameReducers;
