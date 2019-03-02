import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import '../assets/styles/Header.js';

function Header(){
  return (
    <div>
      <nav id="nav" role="navigation">
        <a href="#nav" title="Show navigation">Show navigation</a>
        <a href="#" title="Hide navigation">Hide navigation</a>
        <ul>
          <li><Link to='/'>Menu</Link></li>
          <li><Link to='/Info'>Gameplay</Link></li>
          <li>Your score: '0'</li>
          <li>Your Name:''</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
