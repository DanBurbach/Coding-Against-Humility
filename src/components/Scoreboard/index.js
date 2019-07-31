import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import _ from "lodash";

import firebase from '../../Firebase';
import Counter from './Counter';

import "../../assets/styles/ScoreBoard.css";

class ScoreBoard extends Component {
    constructor() {
        super();
        this.state = {
            counters: [],
            numberOfPlayers: '',
            total: 0,
            gameLength: '',
        };
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
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
        console.log(this.state);

        if (
            (this.state.counters[0]) ||
            (this.state.counters[1]) || 
            (this.state.counters[2]) >= this.state.gameLength)
            {
                alert('Game Over!')
                this.props.firebase.logout()
                this.props.history.push('/');
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


    render() {
        const { counters } = this.state;
        const scoreboard = counters.map((counter, index) => {
          return (
              <ol key={index}>
                  <Counter 
                    key = {counter.id}
                    onIncrement = {this.handleIncrement.bind(this)}
                    counter = { counter }
                  />
              </ol>
            )
        })

        return ( 
            <div >
                <div className='scoreBoardLayout'>
                <ul>
                    {scoreboard}
                </ul>
                    <div> 
                        Total: {this.state.total}
                        <br/>
                        <button id='scoreBoardButton' onClick = {this.handleReset.bind(this)}> Reset </button> 
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