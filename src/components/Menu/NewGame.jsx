import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

class NewGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _name: null,
      _players: null,
      _gamelength: null,
    };
    // this.handleNewGameSubmission = this.handleNewGameSubmission.bind(this);
    // this.handleNewPlayerName = this.handleNewPlayerName.bind(this);
    // this.handlePlayerNumbers = this.handlePlayerNumbers.bind(this);
    // this.handleLengthChoice = this.handleLengthChoice.bind(this);
  }

  handleNewGameSubmission(props) {
    event.preventDefault();
    props.onNewGameSubmission({_name: this.state.nameValue, _players: this.state.playersValue, _gamelength: this.state.gameValue, id: v4()
    });
  }

  handleNewPlayerName(event) {
    this.setState({nameValue: event._name.value});
    console.log(event._name.value);
  }

  handlePlayerNumbers(event) {
    this.setState({playersValue: event._players.value});
    console.log(event._players.value);
  }

  handleLengthChoice(changeEvent) {
    this.setState({gameValue: changeEvent.target.value});
    console.log('Your game length is:', this.state.gameValue);
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
                    checked={this.state.gameValue === '5'}
                    onChange={this.handleLengthChoice}
                    className='form-check-input'/>
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
                    checked={this.state.gameValue === '7'}
                    onChange={this.handleLengthChoice}
                    className='form-check-input'/>
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
                    checked={this.state.gameValue === '10'}
                    onChange={this.handleLengthChoice}
                    className='form-check-input'/>
                  Long
                </label>
              </div>
            </div>
          </div>
          <br/>

          <p><input type="submit" value="Submit"></input> | <input type="reset"></input></p>
        </form>
        <Link to='/' id='backbutton'>Back</Link>
      </div>
    );
  }
}
NewGame.propTypes = {
  onNewGameSubmission: PropTypes.func,
  handleNewGameSubmission: PropTypes.func
};

export default NewGame;
