import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <button><Link to='/newgame'>New Game</Link></button>
    <button><Link to='/info'>Info</Link></button>
    <button><Link to='/fineprint'>Fine Print</Link></button>
  );
}

export default Main;
