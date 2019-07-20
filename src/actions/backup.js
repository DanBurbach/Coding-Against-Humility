
export const addNewGame = (name, gamelength, players ) => ({
  type: c.ADD_NEWGAME,
  name,
  gamelength,
  players
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

