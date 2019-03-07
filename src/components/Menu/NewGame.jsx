import React from 'react';

function NewGame(){
  return (
    <div>
      <form>
        <p>Your Name:</p>
        <input type="text" name="username" /><br />

        <p>Number of players (between 2 and 5):</p>
        <input type="number" name="quantity" min="2" max="5" />

        <p>Game length:</p>
        <input type="radio" name="gamelength" value="short" checked> Short </input><br />
        <input type="radio" name="gamelength" value="medium"> Medium </input><br />
        <input type="radio" name="gamelength" value="long"> Long </input><br />

        <p><input type="submit" value="Submit"></input></p>
        <p><input type="reset"></input></p>
      </form>
    </div>
  );
}

export default NewGame;
