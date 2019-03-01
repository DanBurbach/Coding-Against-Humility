import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  const menubutton = {
    color: 'white',
    textDecoration: 'none'
  };

  const yourscore = {
    color: 'white',
    textDecoration: 'none',
    textAlign: 'right'
  };

  return (
    <div>
      <button><Link to='/' style={menubutton}>Menu</Link></button>
      <p style={yourscore}>Your score: '0'</p>
    </div>
  );
}

export default Header;
