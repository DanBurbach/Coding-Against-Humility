import React, { Component } from 'react';
import Header from '../Header';
import ScoreBoard from '../Scoreboard';
import MainPlayer from '../MainPlayer/MainPlayer';
import BlackCardDraw from '../BlackCardDraw';
import { connect } from 'react-redux';
import { firebaseConnect } from "react-redux-firebase";

import "../../assets/styles/Board.css";
import DropBoxWhiteCard from "../WhiteCardDraw/DropBoxWhiteCard";


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whiteCardSelected: []
    };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(component) {
    const { whiteCardSelected } = this.state;
    console.log(component);
    const newwhiteCardSelectedList = _.concat([], whiteCardSelected, component);
    this.setState({
      whiteCardSelected: newwhiteCardSelectedList
    });
  }

  render() {
    const { whiteCardSelected } = this.state;
    return (
      <div>
        <div>
          <Header />
        </div>
        <br />
        <div className="Board-Play-Area">
          <ScoreBoard />
        </div>
        <div className="Board-Play-Area">
          <BlackCardDraw />
        </div>
        <div className="Board-Play-Area">
          <DropBoxWhiteCard onDrop={this.onDrop} whiteCardSelected={whiteCardSelected} />
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
