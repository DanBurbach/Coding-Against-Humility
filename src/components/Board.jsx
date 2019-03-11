import React from 'react';
import Header from './Header';
import GameInfo from './GameInfo';
import BlackDeckDisplay from './BlackDeckDisplay';
import MainPlayer from './MainPlayer/MainPlayer';
import JudgePlayer from './JudgePlayer';

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

export default Board;
