import React from 'react';

class BlkDeck extends React.Component {

    constructor() {
      super(props);
      this.state = {
        masterGameList: []
      };
    }

    dealNewBlackCard() {
      let blkcard_keys = Object.keys(window.gameBoard);
      let ran_blkcard_key = blkcard_keys[Math.floor(Math.random() *blkcard_keys.length)];
      window.currentBlackCard = window.gameBoard[ran_blkcard_key];
      console.log(window.currentBlackCard);
      console.log(window.gameBoard);
    }

    render() {
      return (
        <div>
          <NewGame onNewGame={this.handleAddingNewPlayerToGame} />
        </div>
      );
    }
  }

  export default BlkDeck;
