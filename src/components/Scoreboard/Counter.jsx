import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";

import "../../assets/styles/ScoreBoard.css";


class Counter extends Component {
  render() {
    const { onIncrement } = this.props;
    return (
      <div>
        <div className="scoreboard-styling">
          <span> {this.formatCount()} </span>
        </div>
        <div className="scoreboard-styling">
          <button
            id="scoreBoardButtonPoint"
            onClick={() => onIncrement(this.props.counter)}>
            Add
          </button>
        </div>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value;
  }
}

const enhance = compose(
  connect(({ firebase: { auth, profile } }) => ({ auth, profile }))
);

export default firebaseConnect()(enhance(Counter));