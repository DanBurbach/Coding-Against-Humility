import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import _ from "lodash";

import firebase from '../../Firebase';
import Counter from './Counter';

import "../../assets/styles/ScoreBoard.css";
import { isTemplateElement } from '@babel/types';

class ScoreBoard extends Component {
    constructor() {
        super();
        this.state = {
            counters: [],
            //     { id: 1, value: 0 },
            //     { id: 2, value: 0 },
            //     { id: 3, value: 0 },
            //     { id: 4, value: 0 },
            //     { id: 5, value: 0 }
            // ],
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
        for (var i = 1; i<=this.state.gameLength;i++){numberOfPlayers.push(i).apply()}

        const playersInfo = numberOfPlayers.forEach(function(player) {
            push({value: 0})
        })
        console.log(playersInfo);
        
        that.setState({
            counters: playersInfo
        })        

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
        if (
            this.state.counters.value >= this.state.gameLength) 
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
        // const { counters } = this.state;
        // const scoreboard = counters.map((counter) => {
        //   return (
        //       <li>
        //           <Counter 
        //             id = {counter.id}
        //             key = {counter.id}
        //             onIncrement = {this.handleIncrement.bind(this)}
        //             counter = { counter }
        //           />
        //       </li>
        //     )
        // })

        return ( 
            <div >
                <div className='scoreBoardLayout'>
                {/* <ul>
                    {scoreboard}
                </ul> */}
                    <div> Total: {this.state.total}             
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