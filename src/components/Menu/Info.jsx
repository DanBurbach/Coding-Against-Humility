import React from 'react';
import { Link } from 'react-router-dom';

function Info(){
  return (
    <div>
      <div class="container">
        <h2>Game Play Rules</h2>
        <p>To start the game, click on New Game</p>

        <p>Host will start the game as Judge. Starts by dealing the first Black Card</p>

        <p>Everyone else answers the question or fills in the blank by passing one White Card to the Judge, these will be face down to other players</p>

        <p>The Judge, and other players, read the returned White Cards. The Judge deems the "best answer" to the Black Card and gives a point to that player</p>

        <p>After round is over a new player becomes Judge, and everyone draws back up to 10 cards</p>

        <h2>Features</h2>

        <h2>About Cards</h2>

        <p>What is Coding Against Humility?</p>

        <p>It is a React-based game using a library built from Cards Against Humanity, an amazing and ever popular card game.</p>

        <h4>What is Cards Against Humanity?</h4>
        <p>If you have been living under a rock for the last few years, here is a brief summery about Cards Against Humanity and their game...</p>

        <p><em>Cards Against Humanity is a party game for horrible people. Unlike most of the party games you've played before, Cards Against Humanity is as despicable and awkward as you and your friends.</em></p>

        <p><em>The game is simple. Each round, one player asks a question from a black card, and everyone else answers with their funniest white card.</em></p>

        <h2>Disclaimer:</h2>
        <p>You will laugh or you will be insulted. Either way, it is a <strong>game</strong> and it will bring out the worst in you.</p>

        <button><Link to='/'>Back</Link></button>
      </div>
    </div>
  );
}

export default Info;
