import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let _name = null;
let _gamelength = null;
let _players = null;

class NewGameForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleNewGameSubmission = this.handleNewGameSubmission.bind(this);
    console.log(props);
  }

  handleNewGameSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    console.log(_gamelength.value);
    console.log(_players.value);
  }

  render() {
    return (
      <div>
        <div className = 'container'>
          <form onSubmit={this.handleNewGameSubmission}>
            <label htmlFor='nameValue'>Your Name:</label>
            <div>
              <input type='text' ref={(input)=>{_name=input;}} />
            </div>
            <br/>

            <p><label htmlFor='playersValue'>Number of players (between 3 and 8):</label></p>
            <input
              type='range'
              name='_players'
              min='3'
              max='8'
              step='1'
              value={this.state.value}
              ref={(input)=>{_players=input;}}/>
            <br/>

            <p><label htmlFor='gameValue'>Game length:</label></p>
            <input
              type='range'
              name='_gamelength'
              min='6'
              max='10'
              step='2'
              value={this.state.value}
              ref={(input) => { _gamelength = input; }} />
            <br/>

            <p><Link to='/board'><input type='submit' value='Submit'></input></Link> | <input type='reset'></input></p>
          </form>
          <Link to='/' id='backbutton'>Back</Link>
        </div>
      </div>
    );
  }
}

NewGameForm.propTypes = {
  handleNewGameSubmission: PropTypes.func,
};


export default connect()(NewGameForm);
