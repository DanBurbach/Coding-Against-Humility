import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NameValue from './Menu/NameValue';
import GameInfo from './GameInfo';
import '../assets/styles/Header.css';


const Header = () => {
  return (
    <div>
      <nav id="nav">
        <ul>
          <li><Link to='/'>Menu</Link></li>
          <li><Link to='/headergameplay'>Gameplay</Link></li>
          <li><NameValue/></li>
          <li><GameInfo/></li>
<<<<<<< HEAD
=======
          <li>{this.props.name}</li>
>>>>>>> feature/refactor-attempt-react-redux-firebase
        </ul>
      </nav>
    </div>
  );
};

export default connect()(Header);
