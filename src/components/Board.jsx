import React from 'react';
import Header from './Header';
import GameInfo from './GameInfo';
import Deck from './Deck';
import MainPlayer from './MainPlayer/MainPlayer';
import JudgePlayer from './JudgePlayer';

function Board(){
  return (
    <div>
      <Header />
      <GameInfo />
      <Deck />
      <MainPlayer />
      <JudgePlayer />
    </div>
  );
}

export default Board;
