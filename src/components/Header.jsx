import React from 'react';
import { boundUserName } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/Header.css';


const Header = ({dispatch, name}) => {
  return (
    <div>
      <nav id="nav" role="navigation">
        <ul>
          <li><Link to='/'>Menu</Link></li>
          <li><Link to='/Info'>Gameplay</Link></li>
          <li>{boundUserName(name)}</li>
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
