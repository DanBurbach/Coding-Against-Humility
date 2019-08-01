import React, { Component } from 'react';
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import '../../assets/styles/Modal.css';

class WinPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleNavigateMain = this.handleNavigateMain.bind(this);
    this.handleNavigateNewGame = this.handleNavigateNewGame.bind(this);
}

    handleNavigateMain = () => {
        this.props.firebase.logout()
        this.props.history.push('/');
    }

    handleNavigateNewGame = () => {
        this.props.history.push('/newgameform');
    }

  render() {
      return (
            <div className='modalstyles-header'>
              <h2>Congradulations on Winning!</h2>
            <div className='modalstyles'>
              <div className='modalstyles-child'>
                <button id='closeModal'onClick={this.handleNavigateMain}> Main Menu </button>
              </div>
              <div className='modalstyles-child'>
                <button id='closeModal' onClick={this.handleNavigateNewGame}> New Game </button>
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

export default firebaseConnect()(enhance(WinPopUp));