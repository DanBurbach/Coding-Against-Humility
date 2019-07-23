import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";

class Counter extends Component {
  render() {
    const { onIncrement } = this.props;
    return (
      <div>
        <span> {this.formatCount()} </span>
        <br />
        <button
          id="scoreBoardButtonPoint"
          onClick={() => onIncrement(this.props.counter)}
        >
          Add{" "}
        </button>
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