import React from 'react';
import RadioGameLength from './RadioGameLength';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

class NewGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _name: 'null',
      _players: 'null',
      _gamelength: 'null'
    };
    this.handleNewGameSubmission = this.handleNewGameSubmission.bind(this);
  }

  handleNewGameSubmission(props) {
    event.preventDefault();
    props.onNewGameSubmission({name: _name.value, players: _players.value, _gamelength: this.state.selectedGameLength, id: v4()
    });

    _name.value = '';
    _players.value = '';
    _gamelength.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={handleNewGameSubmission}>
          <p>Your Name:</p>
          <input
            type='text'
            id='name'
            placeholder='Name'
            ref={(input) => {_name = input;}}/>

          <p>Number of players (between 3 and 5):</p>
          <input
            type='number'
            name='quantity'
            min='3'
            max='8'
            value='3'/>

          <p>Game length:</p>
          <RadioGameLength />

          <p><input type="submit" value="Submit"></input></p>
          <p><input type="reset"></input></p>
        </form>
      </div>
    );
  }
}
NewGame.propTypes = {
  onNewGameSubmission: PropTypes.func
};

export default NewGame;
