import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

class ScoreCounter extends Component {
    constructor() {
        super(props);
        this.state = {
            scoreCounters: [{
                id: 1,
                value: 0
            }]
        };
        this.handleScoreIncrease = this.handleScoreIncrease.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleScoreIncrease(counter) {
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

    handleReset() {
        const total = 0;
        const counters = this.state.counters.map(y => {
            y.value = 0;
            return y;
        });
        this.setState({
            counters: counters,
            total: total
        })
    }

    render() {
        return ( 
            <div>
                <button onClick = {this.handleReset}> 
                    Reset Score 
                </button> 
                {this.state.counters.map(counter => ( 
                <CountRecorder 
                    key = {counter.id}
                    onIncrement = {this.handleScoreIncrease}
                    counter = {counter}
                />
                ))
                } 
            <div> Total: {this.state.total} </div> 
            </div>
        )
    }
}
const enhance = compose(
    connect(({firebase: {auth, profile}}) => ({auth, profile}))
);

export default firebaseConnect()(enhance(ScoreCounter));