import React from 'react';
import PropTypes from 'prop-types';
import NewGameForm from './Menu/NewGameForm';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleAddingNewPlayerToGame =
    this.handleAddingNewPlayerToGame.bind(this);
  }

  handleAddingNewPlayerToGame(){
    this.setState({formVisibleOnPage: true});
  }

  render() {
    return (
      <div>
        {currentlyVisibleNewGame}
      </div>
    );
  }
}

Game.propTypes = {
  onNewGameCreation: PropTypes.func
};

export default Game;
