import React from 'react';
import { Link } from 'react-router-dom';

function Info(){
  return (
    <div>
      <div class="container">
        <h2>Game Play Rules</h2>
        <h2>Features</h2>
        <h2>About Cards</h2>
        <button><Link to='/'>Back</Link></button>
      </div>
    </div>
  );
}

export default Info;
