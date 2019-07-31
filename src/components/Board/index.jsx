import React, { Component } from 'react';
import Header from '../Header';
import ScoreBoard from '../Scoreboard';
import MainPlayer from '../MainPlayer/MainPlayer';
import BlackCardDraw from '../BlackCardDraw';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import _ from 'lodash';

import '../../assets/styles/Board.css';
import '../../assets/styles/DraggableWhiteCard.css';

import DropBoxWhiteCard from '../WhiteCardDraw/DropBoxWhiteCard';


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whiteCardSelected: []
    };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(name) {
    const { whiteCardSelected } = this.state;
    const newwhiteCardSelectedList = _.replace([], whiteCardSelected, name);
    this.setState({
      whiteCardSelected: newwhiteCardSelectedList
    });
    return (
      <div className='card-drop-area'>
        {this.state.whiteCardSelected}
      </div>
    );
  }

  handleNewWhiteCard = (id) => {
    return {
      items: prevState.items.filter(item => item.id !==id)
    } 
  }

  render() {
    const { whiteCardSelected } = this.state;
    return (
      <div>
        <div>
          <Header />
        </div>
        <br />
        <div className="board-play-area">
          <div className="board-play-area">
            <ScoreBoard />
          </div>
          <div className="board-play-area">
            <BlackCardDraw />
          </div>
          <div className="board-play-area">
            <DropBoxWhiteCard
              onDrop={this.onDrop}
              handleDrop={id => this.handleNewWhiteCard(id)}
              whiteCardSelected={whiteCardSelected}
            />
          </div>
        </div>
        <br />
        <div>
          <MainPlayer />
        </div>
      </div>
    );
  }
}

const enhance = connect(({ firebase: { auth, profile } }) => ({
  auth,
  profile
}));

export default firebaseConnect()(enhance(Board));
