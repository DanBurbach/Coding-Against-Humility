import constants from '../constants';
const { c } = constants;

const startNewGame = (state = {}, action) => {
  let NewGame;
  switch (action.type) {
    
  case c.ADD_NEWGAME:
    const { userName, gameLength, numberOfPlayers, gameWins, id } = action;

    NewGame = Object.assign({}, state, {
      [id]: {
        userName: userName,
        gameLength: gameLength,
        numberOfPlayers: numberOfPlayers,
        gameWins: gameWins,
        id: id
      }
    });
    return NewGame;

  case c.RESTART_GAME:
    return NewGame;
  default:
    return state;
  }
};

export default startNewGame;
