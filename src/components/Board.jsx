import React from 'react';
import Header from './Header';
import BlackDeckDisplay from './BlackCards/BlackDeckDisplay';
import MainPlayer from './MainPlayer/MainPlayer';
import JudgePlayer from './JudgePlayer';
import { connect } from 'react-redux';


function Board(){
  return (
    <div>
      <Header />
      <br/>
      <BlackDeckDisplay />
      <br/>
      <MainPlayer />
      <JudgePlayer />
    </div>
  );
}

export default connect()(Board);
