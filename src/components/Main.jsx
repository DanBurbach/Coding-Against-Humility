import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/MainStyles.css';

function Main() {
  return (
    <div>
      <div id="main">
        <div class="main">
          <div class="mainstyles">
            <h1>Coding Against Humility</h1>
            <h2>A game that makes you a bad person</h2>
          </div>
          <br/>
          <Link to='/newgame'>New Game</Link>
          <Link to='/info'>Info</Link>
          <Link to='/fineprint'>Fine Print</Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
