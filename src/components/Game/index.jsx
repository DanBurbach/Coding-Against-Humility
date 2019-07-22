import React from 'react';
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import Board from '../Board';
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <DndProvider backend={HTML5Backend}>
          <Board />
        </DndProvider>
      </div>
    );
  }
}
const enhance = connect(({ firebase: { auth, profile } }) => ({
  auth,
  profile
}));

export default firebaseConnect()(enhance(Game));
