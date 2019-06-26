import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";


class GameInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: this.props.auth.displayName
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li>Who's turn it is.</li>
          <li>Your score.</li>
          <li>Number of players.</li>
          {this.props.auth.displayName}
        </ul>
      </div>
    );
  }
}

const enhance = compose(
  connect(({ firebase: { auth, profile } }) => ({ auth, profile }))
);

export default firebaseConnect()(enhance(GameInfo));
