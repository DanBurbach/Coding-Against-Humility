import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import Modal from 'react-modal';

import NameValue from '../Menu/NameValue';
import HeaderInfo from '../HeaderInfo';

import '../../assets/styles/Modal.css';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }

      handleOpenModal = () => {
        this.setState({
            showModal: true
        });
      }

      handleCloseModal = () => {
        this.setState({
            showModal: false
        });
      }

  render(){
    return (
      <div className="headerStyles">
        <div className="headerStyles-child">
          <button className="headerButton" onClick={this.handleOpenModal}>
            Menu
          </button>
        </div>
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          ariaHideApp={false}
          contentLabel="Modal"
          className={{
            base: "modal-base",
            afterOpen: "modal-base_after-open",
            beforeClose: "modal-base_before-close"
          }}
          overlayClassName={{
            base: "overlay-base",
            afterOpen: "overlay-base_after-open",
            beforeClose: "overlay-base_before-close"
          }}
          shouldCloseOnOverlayClick={true}
          closeTimeoutMS={500}
        >
          <HeaderInfo />
          <button onClick={this.handleCloseModal} id="closeModal">
            Continue Playing and Close
          </button>
        </Modal>
        <div className="headerStyles-child">
          <NameValue />
        </div>
      </div>
    );
  };
}
      

const enhance = compose(
  withRouter,
  connect(({ firebase: { auth, profile } }) => ({ auth, profile }))
);

export default firebaseConnect()(enhance(Header));
