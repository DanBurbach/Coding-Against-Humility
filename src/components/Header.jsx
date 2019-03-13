import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NameValue from './Menu/NameValue';
import '../assets/styles/Header.css';
import constants from './../constants';
const { c } = constants;

const Header = () => {
  return (
    <div>
      <nav id="nav" role="navigation">
        <ul>
          <li><Link to='/'>Menu</Link></li>
          <li><Link to='/Info'>Gameplay</Link></li>
          <li><NameValue/></li>
        </ul>
      </nav>
    </div>
  );
};

export default connect()(Header);
