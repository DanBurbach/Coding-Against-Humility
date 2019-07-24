import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import firebase from '../../Firebase';
import { withRouter } from 'react-router-dom';

import Counter from './Counter';

import "../../assets/styles/ScoreBoard.css";

class ScoreBoard extends Component {
    constructor() {
        super();
        this.state = {
            counters: [
                { id: 1, value: 0 },
                { id: 2, value: 0 },
                { id: 3, value: 0 },
                { id: 4, value: 0 },
                { id: 5, value: 0 }
            ],
            total: 0,
            gameLength: '',
        };
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    async componentDidMount(){
        let that = this;
        let userId = firebase.auth().currentUser.uid;
        await firebase.database().ref(`gameInfo/ + ${userId}`).child('gameLength').once('value') .then(function(snapshot) {
            that.setState({
                gameLength: (snapshot.val())
            });
        });
        console.log('on loading: ' + this.state);
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
        if ((
            this.state.counters[0].value || this.state.counters[1].value || this.state.counters[2].value || this.state.counters[3].value || this.state.counters[4].value) >= this.state.gameLength) 
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
        return ( 
            <div >
                <div className='scoreBoardLayout'>
                    {this.state.counters.map(counter => ( 
                        <Counter 
                            key = {counter.id}
                            onIncrement = {this.handleIncrement.bind(this)}
                            counter = { counter }
                        />
                ))
            } <div> Total: {
                this.state.total
            }             <button id='scoreBoardButton' onClick = {this.handleReset.bind(this)}> Reset </button> 
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