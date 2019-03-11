import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import NewGameForm from './Menu/NewGameForm';
import PropTypes from 'prop-types';

const _name = {
  handleNewGameInformation(props){
    console.log(handleGameInformation);
  }
};

function Header(){
  return (
    <div>
      <nav id="nav" role="navigation">
        <ul>
          <li><Link to='/'>Menu</Link></li>
          <li><Link to='/Info'>Gameplay</Link></li>
          <li>{_name}</li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}


Header.propTypes = {
  handleNewGameInformation: PropTypes.func
};

export default Header;
