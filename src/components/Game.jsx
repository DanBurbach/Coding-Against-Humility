import React from 'react';
import NewGame from './Menu/NewGame';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterGameList: []
    };
    this.handleAddingNewPlayerToGame =
    this.handleAddingNewPlayerToGame.bind(this);
  }

  handleAddingNewPlayerToGame(newGame){
    let newGamePlayer = this.state.masterGameList.slice();
    newGamePlayer.push(newGame);
    this.setState({masterGameList: newGamePlayer});
  }

  handleNumberOfPlayersToGame(){

  }

  handleLengthOfGame(){

  }

  render() {
    return (
      <div>
        <NewGame onNewGame={this.handleAddingNewPlayerToGame} />
      </div>
    );
  }
}

export default Game;
