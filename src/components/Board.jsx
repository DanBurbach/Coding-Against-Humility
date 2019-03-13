import React from 'react';
import Header from './Header';
import GameInfo from './GameInfo';
import BlackDeckDisplay from './BlackCards/BlackDeckDisplay';
import MainPlayer from './MainPlayer/MainPlayer';
import JudgePlayer from './JudgePlayer';
import { connect } from 'react-redux';
import constants from './../constants';
const { c } = constants;

function Board(){
  return (
    <div>
      <Header />
      <GameInfo />
      <br/>
      <BlackDeckDisplay />
      <br/>
      <MainPlayer />
      <JudgePlayer />
    </div>
  );
}

export default connect()(Board);
