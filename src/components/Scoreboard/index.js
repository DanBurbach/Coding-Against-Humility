import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import firebase from '../../Firebase';

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
            gameLength: [],
        };
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleGameOver = this.handleGameOver.bind(this);
    }

    componentDidMount(){
            let fbGameLength = firebase.database().ref().child('gameLength')
            // .then(gameLength => {
            //     dispatch(pushToState(ref, gameLength.val()))
            // })
            console.log(fbGameLength);
            console.log(this.state);
        }

    handleIncrement = (counter) => {
        const total = this.state.total + 1;
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({
            counters: counters,
            total: total
        });
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


    handleGameOver = () => {
        if (this.state.counters >= this.state.gameLength) {
            alert('Game Over!')
        }
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
    connect(({firebase: {auth, profile}}) => ({auth, profile}))
);

export default firebaseConnect()(enhance(ScoreBoard));