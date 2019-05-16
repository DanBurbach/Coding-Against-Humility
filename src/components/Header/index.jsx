import React from 'react';
import { Link } from 'react-router-dom';
import NameValue from '../Menu/NameValue';
import GameInfo from '../GameInfo';
import * as ROUTES from '../../constants/routes';
import '../../assets/styles/Header.css';


const Header = () => {
  return (
    <div>
      <nav id='nav'>
        <ul>
          <li>
            <Link to={ROUTES.HOME}>Menu</Link>
          </li>
          <li>
            <Link to={ROUTES.MAIN_GAME_GAMEPLAY}>Gameplay</Link>
          </li>
          <li>
            <NameValue />
          </li>
          <li>
            <GameInfo />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
