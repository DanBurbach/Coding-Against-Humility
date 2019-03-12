import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewGame } from '../actions';
import '../assets/styles/Header.css';


const Header = ({dispatch, currentPlayer}) => {
  const { name, id } = currentPlayer;
  return (
    <div>
      <nav id="nav" role="navigation">
        <ul>
          <li><Link to='/'>Menu</Link></li>
          <li><Link to='/Info'>Gameplay</Link></li>
          <li>{name}</li>
        </ul>
      </nav>
    </div>
  );
};

Header.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  dispatch: PropTypes.func
};

export default connect()(Header);
