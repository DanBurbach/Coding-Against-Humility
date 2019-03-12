import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import '../../assets/styles/NewGameForm.css';

let _name = null;
let _gamelength = null;
let _players = null;

class NewGameForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleNewGameSubmission = this.handleNewGameSubmission.bind(this);
  }

  handleNewGameSubmission(event) {
    const { dispatch } = this.props;
    event.preventDefault();
    const newGame = {
      type: 'ADD_NEWGAME',
      id: v4(),
      name: _name.value,
      gamelength: _gamelength.value,
      players: _players.value
    };
    dispatch(newGame);
    console.log(newGame);
    console.log(newGame.name);
    console.log(newGame.gamelength);
    console.log(newGame.players);
  }

  render() {
    return (
      <div className="wrapper fade-in">
        <div id="newgame">
          <div className="newgame">
            <div className="newgamestyles">
              <div className = 'container'>
                <form onSubmit={this.handleNewGameSubmission}>
                  <h2><label htmlFor='nameValue'>Your Name:</label></h2>
                  <div>
                    <p><input type='text' ref={(input)=>{_name=input;}} /></p>
                  </div>
                  <br/>

                  <h2><label htmlFor='playersValue'>Number of players (between 3 and 8):</label></h2>
                  <p>
                    <input
                      type='range'
                      name='_players'
                      min='3'
                      max='8'
                      step='1'
                      value={this.state.value}
                      ref={(input)=>{_players=input;}}/>
                  </p>

                  <h2><label htmlFor='gameValue'>Game length:</label></h2>
                  <p>
                    <input
                      type='range'
                      name='_gamelength'
                      min='6'
                      max='10'
                      step='2'
                      value={this.state.value}
                      ref={(input) => { _gamelength = input; }} />
                  </p>
                  <p><button type='submit'><Link to={{ pathname: `/board`, state: name }} id='newgamebutton'>Submit</Link></button> | <button type='reset' id='newgamebutton' styles='transparent'>Reset</button> | <button><Link to='/' id='newgamebutton'>Back</Link></button>

                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NewGameForm.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(NewGameForm);
