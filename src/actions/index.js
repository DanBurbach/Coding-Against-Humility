import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const addWhiteCard = () => ({
  type: types.ADD_WHITE_CARD,
  newWhiteCard
});

export const removeWhiteCard = (currentWhiteCardID) => ({
  type: types.REMOVE_WHITE_CARD,
  currentWhiteCardID
});

export const addBlackCard = (currentBlackCardID) => ({
  type: types.ADD_BLACK_CARD,
  currentBlackCardID
});

export const removeBlackCard = (currentBlackCardID) => ({
  type: types.REMOVE_BLACK_CARD,
  currentBlackCardID
});

export function drawNewBlackCard(blackcards) {
  return function (dispatch) {
    const localBlackCardID = v4();
    dispatch(addBlackCard(blackcards, localBlackCardID));
    return fetch().then(
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
    return fetch().then(
      response => response.json(),
      error => console.log('An error did occur when pulling a white card', error)
    ).then(function(json) {
      dispatch(addWhiteCard);
    });
  };
}
