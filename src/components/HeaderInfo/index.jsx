import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../LogOut';


import '../../assets/styles/InfoCSS.css';

function HeaderGameplay(){

  const mainbody = {
    textAlign: 'left'
  };

  return (
    <div className="wrapper fade-in">
      <div id="info">
        <div className="info">
          <div className="infostyles">
            <div style={mainbody}>
              <h2>Game Play Rules</h2>
              <p>
                Host will start the game as Judge. Starts by dealing the first
                Black Card
              </p>
              <p>
                Everyone else answers the question or fills in the blank by
                passing one White Card to the Judge, these will be face down
                to other players
              </p>
              <p>
                The Judge, and other players, read the returned White Cards.
                The Judge deems the 'best answer' to the Black Card and gives
                a point to that player
              </p>
              <p>
                After round is over a new player becomes Judge, and everyone
                draws back up to 10 cards
              </p>
              <br />
            </div>
            <br />
            <div className="headerNavigation">
              <div className="gameplay-info-button-layout">
                <Link to={ROUTES.MAIN_GAME}>
                  Back
                </Link>
              </div>
              <div className="gameplay-info-button-layout">
                <SignOutButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderGameplay;
