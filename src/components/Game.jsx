import React from 'react';
import Board from './Board';
import constants from './../constants';
const { c } = constants;

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <Board/>
      </div>
    );
  }
}


export default Game;
