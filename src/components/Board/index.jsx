import React from 'react';
import Header from '../Header';
import ScoreBoard from '../Scoreboard';
import MainPlayer from '../MainPlayer/MainPlayer';
import BlackCardDraw from '../BlackCardDraw';
import { connect } from 'react-redux';
import { firebaseConnect } from "react-redux-firebase";


function Board(){
  return (
    <div>
      <Header/>
      <br/>
      <br/>
      <BlackCardDraw/>
      <MainPlayer/>
      <ScoreBoard/>
    </div>
  );
}

const enhance = connect(({ firebase: { auth, profile } }) => ({
  auth,
  profile
}));

export default firebaseConnect()(enhance(Board));
