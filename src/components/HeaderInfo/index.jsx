import React, { Component } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import SignOutButton from '../LogOut';

import '../../assets/styles/Modal.css';

class HeaderInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
}
  render() {
    return (
      <div className='modalstyles-header'>
        <h2>Game Play Rules</h2>
        <p>
          Host will start the game as Judge. Starts by dealing the first
          Black Card
        </p>
        <p>
          Everyone else answers the question or fills in the blank by
          passing one White Card to the Judge, these will be face down to
          other players
        </p>
        <p>
          The Judge, and other players, read the returned White Cards. The
          Judge deems the 'best answer' to the Black Card and gives a point
          to that player
        </p>
        <p>
          After round is over a new player becomes Judge, and everyone draws
          back up to 10 cards
        </p>
        <div className='modalstyles'>
          <div className='modalstyles-child'>
            <SignOutButton />
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

export default firebaseConnect()(enhance(HeaderInfo));
