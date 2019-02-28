import React from 'react';
import { Button } from 'react-materialize';
import { NavLink } from 'react-router-dom';

function Header(){
  const homeButton = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <div>
      <Button ><NavLink to='/' style={homeButton}>Home</NavLink></Button>
    </div>
  );
}

export default Header;
