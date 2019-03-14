import constants from './../constants';
import v4 from 'uuid/v4';
const { firebaseConfig } = constants;
import Firebase from 'firebase';
// const { c } = constants;

firebase.initializeApp(firebaseConfig);
const gameInfo = firebase.database().ref('gameInfo');

export function newGame(_name, _gamelength, _players) {
  return () => gameInfo.push({
    name: _name,
    gamelength: _gamelength,
    players: _players
  });
}
