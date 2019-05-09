import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseConnect } from "react-redux-firebase";

import '../../assets/styles/NewGameForm.css';
import { newGame } from '../../actions';

class NewGameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      gameLength: '',
      numberOfPlayers: '',
      gameWins: ''
    };
    this.handleNewGameSubmission = this.handleNewGameSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleNewGameSubmission(event) {
    event.preventDefault();
    this.props.dispatch(newGame(this.state));
    this.props.history.push("/game");
  }

  handleChange(event, target) {
    this.setState({ [target]: event });
    console.log(this.state);
  }

  render() {
    const { userName, gameLength, numberOfPlayers } = this.state;
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
                    <p>
                      <input
                        type="text"
                        id="userName"
                        value={userName}
                        onChange={event => {
                          this.handleChange(
                            event.target.value,
                            event.target.id
                          );
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
                      onChange={event => {
                        this.handleChange(event.target.value, event.target.id);
                      }}
                    />
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
                      onChange={event => {
                        this.handleChange(event.target.value, event.target.id);
                      }}
                    />
                  </p>

                  <p>
                    <button type="submit" id="newgamebutton">
                      Submit
                    </button>{" "}
                    |{" "}
                    <button
                      type="reset"
                      id="newgamebutton"
                      styles="transparent"
                    >
                      Reset
                    </button>{" "}
                    |{" "}
                    <button>
                      <Link to="/" id="newgamebutton">
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


NewGameForm.propTypes = {
  dispatch: PropTypes.func
};

const mapStateToProps = (state) => ({
      userName: state.userName,
      gameLength: state.gameLength,
      numberOfPlayers: state.numberOfPlayers,
      gameWins: state.gameWins
})


// export default withRouter(
//   connect(mapStateToProps)(NewGameForm)
// );
//  //  //  //  //  //  //  //

const enhance = compose(
  withRouter(),
  firebaseConnect(),
  connect(({ firebase: { profile } }) => ({
  profile
    }),
    mapStateToProps
  )
);

export default enhance(NewGameForm);