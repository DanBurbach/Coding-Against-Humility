import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const addNewGame = (name, gamelength, players ) => ({
  type: types.ADD_NEWGAME,
  name,
  gamelength,
  players
});

export const addWhiteCard = (newWhiteCard) => ({
  type: types.ADD_WHITE_CARD,
  newWhiteCard
});

export const removeWhiteCard = (currentWhiteCardID) => ({
  type: types.REMOVE_WHITE_CARD,
  currentWhiteCardID
});

export const addBlackCard = (newBlackCard) => ({
  type: types.ADD_BLACK_CARD,
  newBlackCard
});

export const removeBlackCard = (currentBlackCardID) => ({
  type: types.REMOVE_BLACK_CARD,
  currentBlackCardID
});

export function drawNewBlackCard(blackcards) {
  return function (dispatch) {
    const localBlackCardID = v4();
    dispatch(addBlackCard(blackcards, localBlackCardID));
    return fetch(
      // API CALL HERE
    ).then(
      response => response.json(),
      error => console.log('An error did occur when pulling a black card', error)
    ).then(function(json) {
      dispatch(addBlackCard);
    });
  };
}

export function drawNewWhiteCard(whitecards) {
  return function (dispatch) {
    const localWhiteCardID = v4();
    dispatch(addWhiteCard(whitecards, localWhiteCardID));
    return fetch(
      // API CALL HERE
    ).then(
      response => response.json(),
      error => console.log('An error did occur when pulling a white card', error)
    ).then(function(json) {
      dispatch(addWhiteCard);
    });
  };
}
