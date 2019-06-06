<<<<<<< HEAD
import React, { Component } from 'react';
import { compose } from 'redux';
=======
import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
>>>>>>> feature/refactor-attempt-react-redux-firebase
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import firebase from 'firebase/app';

import '../../assets/styles/NewGameForm.css';
import { firebaseConnect } from 'react-redux-firebase';
import { newGame } from '../../actions';
import * as ROUTES from '../../constants/routes';

<<<<<<< HEAD
class NewGameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
=======
class NewGameForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName:  '',
>>>>>>> feature/refactor-attempt-react-redux-firebase
      gameLength: '',
      numberOfPlayers: '',
      gameWins: ''
    };
    this.handleNewGameSubmission = this.handleNewGameSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleNewGameSubmission(event) {
    event.preventDefault();
<<<<<<< HEAD
    this.props.dispatch(newGame(this.state));
    this.props.history.push('/game');
  }

  async handleChange(event, target) {
    console.log(event);
    await this.setState({ [target]: event });
    console.log(this.state);
    console.log(firebase.auth().currentUser);
  }

  render() {
    const { userName, gameLength, numberOfPlayers } = this.state;
=======
    console.log(this.state);
    this.props.dispatch(newGame(this.state));
    this.props.history.push('/game'); 
  }

  handleChange(event, target) {
    console.log(this.state);
    this.setState({ [target]: event });
    console.log(this.state);
  }


  render() {
    const { userName, gameLength, numberOfPlayers } = this.state
>>>>>>> feature/refactor-attempt-react-redux-firebase
    return (
      <div className="wrapper fade-in">
        <div id="newgame">
          <div className="newgame">
            <div className="newgamestyles">
              <div className="container">
                <form onSubmit={this.handleNewGameSubmission}>
                  <h2>
                    <label htmlFor="nameValue">Your Name:</label>
                  </h2>
                  <div>
                    <p>Your displayName: {this.props.auth.displayName}</p>
                    <p>
<<<<<<< HEAD
                      <input
                        type="text"
                        id="userName"
                        value={userName}
                        onChange={event => {
                          this.handleChange(
                            event.target.value,
                            event.target.id
                          );
=======
                      <input type='text' 
                      id='userName' 
                      value={userName}
                      onChange={event => {this.handleChange(event.target.value, event.target.id)
>>>>>>> feature/refactor-attempt-react-redux-firebase
                        }}
                      />
                    </p>
                  </div>
                  <br />

                  <h2>
                    <label htmlFor="playersValue">
                      Number of players (between 3 and 8):
                    </label>
                  </h2>
                  <p>
                    <input
                      type="range"
                      name="numberOfPlayers"
                      id="numberOfPlayers"
                      min="3"
                      max="8"
                      step="1"
                      value={numberOfPlayers}
<<<<<<< HEAD
                      onChange={event => {
                        this.handleChange(
                          event.target.value,
                          event.target.id
                        );
                      }}
                    />
=======
                      onChange={event => {this.handleChange(event.target.value, event.target.id)}}
                      />
>>>>>>> feature/refactor-attempt-react-redux-firebase
                  </p>

                  <h2>
                    <label htmlFor="gameValue">Game length:</label>
                  </h2>
                  <p>
                    <input
                      type="range"
                      name="gameLength"
                      id="gameLength"
                      min="6"
                      max="10"
                      step="2"
                      value={gameLength}
<<<<<<< HEAD
                      onChange={event => {
                        this.handleChange(
                          event.target.value,
                          event.target.id
                        );
                      }}
                    />
=======
                      onChange={event => {this.handleChange(event.target.value, event.target.id)
                      }}
                      />
>>>>>>> feature/refactor-attempt-react-redux-firebase
                  </p>

                  <p>
                    <button type="submit" id="newgamebutton">
                      Submit
                    </button>
                    |
                    <button
                      type="reset"
                      id="newgamebutton"
                      styles="transparent"
                    >
                      Reset
                    </button>
                    |
                    <button>
                      <Link to={ROUTES.HOME} id="newgamebutton">
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
  connect(({ firebase: { auth, profile } }) => ({
    auth,
    profile
  }))
);

export default firebaseConnect()(enhance(NewGameForm));


<<<<<<< HEAD
=======
export default compose(
  withRouter,
  firebaseConnect(),
  connect()(NewGameForm));
>>>>>>> feature/refactor-attempt-react-redux-firebase
