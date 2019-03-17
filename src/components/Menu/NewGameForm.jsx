import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../assets/styles/NewGameForm.css';
import { newGame } from '../../actions';

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
    dispatch(newGame(_name.value, _gamelength.value, _players.value));
    this.props.history.push('/game'); 
  }


  render() {
    return (
      <div className='wrapper fade-in'>
        <div id='newgame'>
          <div className='newgame'>
            <div className='newgamestyles'>
              <div className='container'>
                <form onSubmit={this.handleNewGameSubmission}>
                  <h2>
                    <label htmlFor='nameValue'>Your Name:</label>
                  </h2>
                  <div>
                    <p>
                      <input type='text' ref={input => {_name = input;}}/>
                    </p>
                  </div>
                  <br />

                  <h2>
                    <label htmlFor='playersValue'>
                      Number of players (between 3 and 8):
                    </label>
                  </h2>
                  <p>
                    <input
                      type='range'
                      name='_players'
                      min='3'
                      max='8'
                      step='1'
                      value={this.state.value}
                      ref={input => {
                        _players = input;
                      }}/>
                  </p>

                  <h2>
                    <label htmlFor='gameValue'>Game length:</label>
                  </h2>
                  <p>
                    <input
                      type='range'
                      name='_gamelength'
                      min='6'
                      max='10'
                      step='2'
                      value={this.state.value}
                      ref={input => {
                        _gamelength = input;
                      }}/>
                  </p>

                  <p>
                    <button type='submit' id='newgamebutton'>Submit</button>  |  <button type='reset' id='newgamebutton' styles='transparent'>Reset</button>  |  <button><Link to='/' id='newgamebutton'>Back</Link></button>
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

export default withRouter(connect()(NewGameForm));
