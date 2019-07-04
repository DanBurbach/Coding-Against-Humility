import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import { Modal } from 'react-bootstrap';
import SignInPage from '../Login';

import * as ROUTES from '../../constants/routes';

import '../../assets/styles/MainStyles.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
  };
  this.handleOpenModal = this.handleOpenModal.bind(this);
  this.handleCloseModal = this.handleCloseModal.bind(this);
}
  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="wrapper fade-in">
        <div id="main">
          <div className="main">
            <div className="mainstyles">
              <h1>Coding Against Humility</h1>
              <h2>A game that makes you a bad person</h2>
            </div>
            <br />
            
            <button id="newGameButtonModal" onClick={this.handleOpenModal}>
              NEW Modal Game
            </button>
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>New Game Log In</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <SignInPage />
              </Modal.Body>
              <Modal.Footer>
                <button variant="secondary" onClick={this.handleClose}>
                  Close
                </button>
                <button variant="primary" onClick={this.handleClose}>
                  Save Changes
                </button>
              </Modal.Footer>
            </Modal>

            <Link to={ROUTES.LOG_IN}>New Game</Link>
            <Link to={ROUTES.GAME_INFO}>Info</Link>
            <Link to={ROUTES.GAME_FINEPRINT}>Fine Print</Link>
          </div>
        </div>
      </div>
    );
  }
}

const enhance = connect(({ firebase: { auth, profile } }) => ({ auth, profile }));

export default firebaseConnect()(enhance(Main));
