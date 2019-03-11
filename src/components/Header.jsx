import React from 'react';
import { Link } from 'react-router-dom';
import NewGameForm from './Menu/NewGameForm';
import { connect } from 'react-redux';
import '../assets/styles/Header.css';



function Header(){
  return (
    <div>
      <nav id="nav" role="navigation">
        <ul>
          <li><Link to='/'>Menu</Link></li>
          <li><Link to='/Info'>Gameplay</Link></li>
          <li>{this.state._name}</li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}


export default Header;
