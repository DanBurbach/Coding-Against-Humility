import React from 'react';
import PropTypes from 'prop-types';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleAddingNewPlayerToGame =
    this.handleAddingNewPlayerToGame.bind(this);
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
  handleNewGameSubmission: PropTypes.func
}

export default Game;
