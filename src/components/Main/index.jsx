import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import * as ROUTES from "../../constants/routes";

import '../../assets/styles/MainStyles.css';

function Main() {
  return (
    <div className="wrapper fade-in">
      <div id="main">
        <div className="main">
          <div className="mainstyles">
            <h1>Coding Against Humility</h1>
            <h2>A game that makes you a bad person</h2>
          </div>
          <br />
          <Link to={ROUTES.LOG_IN}>New Game</Link>
          <Link to={ROUTES.GAME_INFO}>Info</Link>
          <Link to={ROUTES.GAME_FINEPRINT}>Fine Print</Link>
        </div>
      </div>
    </div>
  );
}

const enhance = connect(({ firebase: { auth, profile } }) => ({
  auth,
  profile
}));

export default firebaseConnect()(enhance(Main));
