import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <div className="container">
        <h2>Main Menu</h2>
        <button><Link to='/newgame'>New Game</Link></button>
        <button><Link to='/info'>Info</Link></button>
        <button><Link to='/fineprint'>Fine Print</Link></button>
      </div>
    </div>
  );
}

export default Main;
