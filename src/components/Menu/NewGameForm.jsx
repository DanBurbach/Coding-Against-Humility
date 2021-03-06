import React, { Component } from 'react';
import { compose } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import '../../assets/styles/NewGameForm.css';
import { newGame } from '../../actions';
import * as ROUTES from '../../constants/routes';

class NewGameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: this.props.auth.displayName,
      userName: '',
      gameLength: 8,
      numberOfPlayers: 6,
      gameWins: ''
    };
    this.handleNewGameSubmission = this.handleNewGameSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleNewGameSubmission(event) {
    event.preventDefault();
    this.props.dispatch(newGame(this.state));
    this.props.history.push('/game');
  }

  async handleChange(event, target) {
    await this.setState({ [target]: event });
    console.log(this.state);

  }

  render() {
    const { userName, gameLength, numberOfPlayers, displayName } = this.state;
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
                    <h3>{displayName}</h3>
    {/* greyed out for future use as nickname setting instead of display user profile name */}
                  {/* <div>
                    <p>
                      <input
                        type='text'
                        id='userName'
                        value={userName}
                        onChange={event => {
                          this.handleChange(
                            event.target.value,
                            event.target.id
                          );
                        }}
                      />
                    </p>
                  </div> */}
                  <br />

                  <h2>
                    <label htmlFor='playersValue'>
                      Number of players (between 3 and 8):
                    </label>
                  </h2>
                  <p>
                    <input
                      type='range'
                      name='numberOfPlayers'
                      id='numberOfPlayers'
                      min='3'
                      max='8'
                      step='1'
                      value={numberOfPlayers}
                      onChange={event => {
                        this.handleChange(event.target.value, event.target.id);
                      }}
                    />
                  </p>

                  <h2>
                    <label htmlFor='gameValue'>Game length:</label>
                  </h2>
                  <p>
                    <input
                      type='range'
                      name='gameLength'
                      id='gameLength'
                      min='6'
                      max='10'
                      step='2'
                      value={gameLength}
                      onChange={event => {
                        this.handleChange(event.target.value, event.target.id);
                      }}
                    />
                  </p>

                  <p>
                    <button type='submit' id='newgamebutton'>
                      Submit
                    </button>
                    {/* |
                    <button
                      type='reset'
                      id='newgamebutton'
                      styles='transparent'
                    >
                      Reset
                    </button>
                    | */}
                    <button>
                      <Link to={ROUTES.HOME} id='newgamebutton'>
                        Back
                      </Link>
                    </button>
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

const enhance = compose(
  withRouter,
  connect(({ firebase: { auth, profile } }) => ({ auth, profile }))
);

export default firebaseConnect()(enhance(NewGameForm));
