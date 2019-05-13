import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import '../assets/styles/MainStyles.css';

function Main() {
  return (
    <div className='wrapper fade-in'>
      <div id='main'>
        <div className='main'>
          <div className='mainstyles'>
            <h1>Coding Against Humility</h1>
            <h2>A game that makes you a bad person</h2>
          </div>
          <br/>
          <Link to='/newgameform'>New Game</Link>
          <Link to='/info'>Info</Link>
          <Link to='/fineprint'>Fine Print</Link>
        </div>
      </div>
    </div>
  );
}

const enhance = connect(({ firebase: { profile } }) => ({
  profile
}));

export default firebaseConnect()(enhance(Main));
