import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

class Counter extends Component {
    render() {
        const { onIncrement } = this.props;
        return ( 
            <div>
                <span> {this.formatCount()} </span> 
                <button onClick = {() => onIncrement(this.props.counter)}>Add </button>
            </div>
        );
    }

    formatCount() {
        const { value } = this.props.counter;
        return value;
    }
}

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
            total: 0
        };
    }
    handleIncrement(counter) {
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

    handleDecrement(counter) {
        const total = this.state.total - 1;
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {
            ...counter
        };
        counters[index].value--;
        this.setState({
            counters: counters,
            total: total
        });
    }

    handleReset() {
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
            <button onClick = {this.handleReset.bind(this)}> Reset </button> {
                this.state.counters.map(counter => ( 
                    <Counter 
                        key = {counter.id}
                        onIncrement = {this.handleIncrement.bind(this)}
                        onDecrement = {this.handleDecrement.bind(this)}
                        counter = { counter }
                    />
                ))
            } <div> Total: {
                this.state.total
            } </div> 
            </div>
        );
    }
}
const enhance = compose(
    connect(({firebase: {auth, profile}}) => ({auth, profile}))
);

export default firebaseConnect()(enhance(ScoreBoard));