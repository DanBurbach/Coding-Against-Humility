import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";

class Gameplay extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleHosting = this.handleHosting.bind(this);
    this.handleJoinGame = this.handleJoinGame.bind(this);
    this.handleDisplayConnect = this.handleDisplayConnect.bind(this);
  }

handleHosting = () => {

}

handleJoinGame = () => {

}

handleDisplayConnect = gameCode => {

}

  render() {
    return (
      <div>

      </div>
    );
  }
}

const enhance = compose(
  connect(({ firebase: { auth, profile } }) => ({ auth, profile }))
);

export default firebaseConnect()(enhance(Gameplay));