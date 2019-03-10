import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

let _name = null;
let _gamelength = null;
let _players = null;

class NewGame extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      _gamelength:null
    };
    
    this.handleNewGameSubmission = this.handleNewGameSubmission.bind(this);
    this.handleNewPlayerName = this.handleNewPlayerName.bind(this);
    this.handlePlayerNumbers = this.handlePlayerNumbers.bind(this);
    this.handleLengthChoice = this.handleLengthChoice.bind(this);
  }

  handleNewGameSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    console.log(_gamelength.value);
    console.log(_players.value);
    _name.value = '';
    _gamelength.value = '';
    _players.value = '';
    // this.props.onNewGameSubmission(
    //   {_name: this.state.nameValue,
    //     _players: this.state.playersValue,
    //     _gamelength: this.state.gameValue, 
    //     id: v4()
    //   });
  }

  handleNewPlayerName(event) {
    this.setState({nameValue: event._name.value});
  }

  handlePlayerNumbers(event) {
    this.setState({playersValue: event._players.value});
  }

  handleLengthChoice(event) {
    this.setState({gameValue: event.target.value});
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleNewGameSubmission}>
          <label htmlFor='nameValue'>Your Name:</label>
          <div>
            <input type='text' 
            ref={(input)=>{_name=input;}} />
          </div>
          <br/>

          <label htmlFor='playersValue'>Number of players (between 3 and 8):</label>
          <input
            type='range'
            name='_players'
            min='3'
            max='8'
            step='1'
            value={this.state.value}
            ref={(input)=>{_players=input;}}/>
          <br/>

          <label htmlFor='gameValue'>Game length:</label>
          <div className='container'>
            <div className='row'>
              <input
                type='range'
                name='_gamelength'
                min='6'
                max='10'
                step='2'
                value={this.state.value}
                ref={(input) => { _gamelength = input; }} />
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
