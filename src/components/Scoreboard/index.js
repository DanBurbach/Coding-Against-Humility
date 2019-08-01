import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import Modal from "react-modal";
import _ from "lodash";

import firebase from '../../Firebase';
import Counter from './Counter';
import WinPopUp from '../WinPopup';

import "../../assets/styles/ScoreBoard.css";
import "../../assets/styles/Modal.css";


class ScoreBoard extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            counters: [],
            numberOfPlayers: '',
            total: 0,
            gameLength: '',
        };
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }

    async componentDidMount(){
        let that = this;
        let userId = firebase.auth().currentUser.uid;
        
        await firebase.database().ref(`gameInfo/ + ${userId}`).child('numberOfPlayers').once('value')
            .then(function (snapshot) {
                that.setState({
                    numberOfPlayers: (snapshot.val())
                });
            });

        await firebase.database().ref(`gameInfo/ + ${userId}`).child('gameLength').once('value') 
            .then(function(snapshot) {
                that.setState({
                    gameLength: (snapshot.val())
                });
            });

        const numberOfPlayers = [];
            for (var i = 1; i <= this.state.numberOfPlayers; i++) {numberOfPlayers.push(i)}
                        
        const playersInfo = _.flatMap(numberOfPlayers, (value, index, array) =>
            array.length -0 !== index ? [{value, value: 0}] : value);        
                that.setState({
                    counters: playersInfo
                })
    }


    handleIncrement = (counter, event) => {
        const total = this.state.total + 1;
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        
        this.setState({
            counters: counters,
            total: total
        });
//just a touch sloppy AND returns many errors on value of NA

//in future will work on working on a conditional if statement to handle 
//the number of players

        if (((this.state.counters[0].value + 1) >= this.state.gameLength) ||
            ((this.state.counters[1].value + 1) >= this.state.gameLength) ||
            ((this.state.counters[2].value + 1) >= this.state.gameLength) ||
            ((this.state.counters[3].value + 1) >= this.state.gameLength) ||
            ((this.state.counters[4].value + 1) >= this.state.gameLength) ||
            ((this.state.counters[5].value + 1) >= this.state.gameLength) ||
            ((this.state.counters[6].value + 1) >= this.state.gameLength) ||
            ((this.state.counters[7].value + 1) >= this.state.gameLength)) {
                this.handleOpenModal();
        }
    }

    handleReset = () => {
        const total = 0;
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({
            counters: counters,
            total: total
        });
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

    render() {
        const { counters } = this.state;
        const scoreboard = counters.map((counter, index) => {
          return (
              <ol key={index}>
                  <Counter 
                    key = {counter.id}
                    onIncrement = {this.handleIncrement}
                    counter = { counter }
                  />
              </ol>
            )
        })

        return ( 
            <div >
                <div className='scoreBoardLayout'>
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
                            <WinPopUp />
                            <button onClick={this.handleCloseModal} id="closeModal">
                                Continue Playing and Close
                            </button>
                        </Modal>
                <ul>
                    {scoreboard}
                </ul>
                    <div> 
                        Total: {this.state.total}
                        <br/>
                        <button id='scoreBoardButton' onClick = {this.handleReset}> Reset </button> 
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

export default firebaseConnect()(enhance(ScoreBoard));