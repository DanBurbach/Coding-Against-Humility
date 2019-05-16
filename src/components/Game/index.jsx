import React from 'react';
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import Board from '../Board';

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
const enhance = connect(({ firebase: { auth, profile } }) => ({
  auth,
  profile
}));

export default firebaseConnect()(enhance(Game));
