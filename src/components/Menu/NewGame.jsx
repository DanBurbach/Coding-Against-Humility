import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

class NewGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _name: null,
      _players: null,
      _gamelength: null,
    };
    this.handleNewGameSubmission = this.handleNewGameSubmission.bind(this);
    this.handleNewPlayerName = this.handleNewPlayerName.bind(this);
    this.handlePlayerNumbers = this.handlePlayerNumbers.bind(this);
    this.handleLengthChoice = this.handleLengthChoice.bind(this);
  }

  handleNewGameSubmission(props) {
    event.preventDefault();
    props.onNewGameSubmission({_name: _name.value, _players: _players.value, _gamelength: this.state.selectedGameLength, id: v4()
    });
    _name.value = '';
    _players.value = '';
    _gamelength.value = '';
  }

  handleNewPlayerName(event) {
    this.setState({nameValue: event._name.value});
    console.log(event._name.value);
  }

  handleLengthChoice(changeEvent) {
    this.setState({selectedGameLength: changeEvent.target.value});
    console.log('Your game length is:', this.state.selectedGameLength);
  }

  handlePlayerNumbers(event) {
    this.setState({playersValue: event._players.value});
    console.log(event._players.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleNewGameSubmission}>
          <p>Your Name:</p>
          <div>
            <input type="text" value={this.state._name} onChange={this.handleNewPlayerName} />
          </div>
          <br/>

          <p>Number of players (between 3 and 8):</p>
          <input
            type='range'
            name='_players'
            min='3'
            max='8'
            value={this.state._players}
            onChange={this.handlePlayerNumbers}/>
          <br/>

          <p>Game length:</p>
          <div className='container'>
            <div className='row'>
              <div className='form-check'>
                <label>
                  <input
                    type='radio'
                    name='_gamelength'
                    defaultValue='5'
                    checked={this.state.selectedGameLength === '5'}
                    onChange={this.handleLengthChoice}
                    className='form-check-input'
                  />
                  Short
                </label>
              </div>
              <br/>
              <div className='form-check'>
                <label>
                  <input
                    type='radio'
                    name='_gamelength'
                    defaultValue='7'
                    checked={this.state.selectedGameLength === '7'}
                    onChange={this.handleLengthChoice}
                    className='form-check-input'
                  />
                  Medium
                </label>
              </div>
              <br/>
              <div className='form-check'>
                <label>
                  <input
                    type='radio'
                    name='_gamelength'
                    defaultValue='10'
                    checked={this.state.selectedGameLength === '10'}
                    onChange={this.handleLengthChoice}
                    className='form-check-input'
                  />
                  Long
                </label>
              </div>
            </div>
          </div>
          <br/>

          <p><input type="submit" value="Submit"></input> | <input type="reset"></input></p>
        </form>
      </div>
    );
  }
}
NewGame.propTypes = {
  onNewGameSubmission: PropTypes.func,
  handleNewGameSubmission: PropTypes.func
};

export default NewGame;
