import React from 'react';
import Header from './Header';
import Deck from './Deck';
import MainPlayer from './MainPlayer/MainPlayer';

function Board(){
  return (
    <div>
      <Header />
      <Deck />
      <MainPlayer />
    </div>
  );
}

export default Board;
