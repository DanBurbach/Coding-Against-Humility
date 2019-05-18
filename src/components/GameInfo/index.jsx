import React from 'react';
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";


function GameInfo() {
  return (
    <div>
      <ul>
        <li>Who's turn it is.</li>
        <li>Your score.</li>
        <li>Number of players.</li>
      </ul>
    </div>
  );
}


const enhance = connect(
  ({ firebase: { auth, profile } }) => ({ auth, profile,})
)

export default firebaseConnect()(enhance(GameInfo));
