import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  const menubutton = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <div>
      <button><Link to='/' style={menubutton}>Menu</Link></button>
    </div>
  );
}

export default Header;
