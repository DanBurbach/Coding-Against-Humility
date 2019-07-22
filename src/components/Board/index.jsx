import React from 'react';
import Header from '../Header';
import ScoreBoard from '../Scoreboard';
import MainPlayer from '../MainPlayer/MainPlayer';
import BlackCardDraw from '../BlackCardDraw';
import { connect } from 'react-redux';
import { firebaseConnect } from "react-redux-firebase";

import "../../assets/styles/Board.css";
import WhiteCardChosenBox from '../WhiteCardDraw/WhiteCardChosenBox';

function Board(){
  return (
    <div>
      <div>
        <Header />
      </div>
      <br />
      <br />
      <div className="Board-Play-Area">
        <ScoreBoard />
      </div>
      <div className="Board-Play-Area">
        <BlackCardDraw />
      </div>
      <div className="Board-Play-Area">
        <WhiteCardChosenBox />
      </div>
      <br />
      <div>
        <MainPlayer />
      </div>
    </div>
  );
}

const enhance = connect(({ firebase: { auth, profile } }) => ({
  auth,
  profile
}));

export default firebaseConnect()(enhance(Board));
