import constants from './../constants';
// import v4 from 'uuid/v4';
const { firebaseConfig } = constants;
import Firebase from 'firebase';

firebase.initializeApp(firebaseConfig);
const gameInfo = firebase.database().ref('gameInfo');

export function newGame(_name, _gamelength, _players) {
  console.log('reach');
  return () => gameInfo.push({
    name: _name,
    gamelength: _gamelength,
    players: _players
  });
}

export const addNewGame = (name, gamelength, players ) => ({
  type: c.ADD_NEWGAME,
  name,
  gamelength,
  players
});

export const userName = (name) => ({
  type: c.USER_NAME,
  name
});

export const gameLength = (gamelength) => ({
  type: c.GAME_LENGTH,
  gamelength
});

export const numberOfPlayers = (players) => ({
  type: c.NUMBER_PLAYERS,
  players
});



export const addWhiteCard = (newWhiteCard) => ({
  type: c.ADD_WHITE_CARD,
  newWhiteCard
});

export const removeWhiteCard = (currentWhiteCardID) => ({
  type: c.REMOVE_WHITE_CARD,
  currentWhiteCardID
});

export const addBlackCard = (newBlackCard) => ({
  type: c.ADD_BLACK_CARD,
  newBlackCard
});

export const removeBlackCard = (currentBlackCardID) => ({
  type: c.REMOVE_BLACK_CARD,
  currentBlackCardID
});

export function drawNewBlackCard(blackCards) {
  return function (dispatch) {
    const localBlackCardID = v4();
    dispatch(addBlackCard(blackCards, localBlackCardID));
    return fetch('https://codingagainsthumilityapi.firebaseio.com/blackCards').then(
      response => response.json(),
      error => console.log('An error did occur when pulling a black card', error)
    ).then(function(json) {
      dispatch(addBlackCard);
    });
  };
}

export function drawNewWhiteCard(whiteCards) {
  return function (dispatch) {
    const localWhiteCardID = v4();
    dispatch(addWhiteCard(whiteCards, localWhiteCardID));
    return fetch('https://codingagainsthumilityapi.firebaseio.com/whiteCards').then(
      response => response.json(),
      error => console.log('An error did occur when pulling a white card', error)
    ).then(function(json) {
      dispatch(addWhiteCard);
    });
  };
}
