import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
      </div>
    );
  }
}

Game.propTypes = {
  onNewGameCreation: PropTypes.func
};

export default Game;
