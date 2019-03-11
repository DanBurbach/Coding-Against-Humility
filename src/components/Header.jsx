import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../assets/styles/Header.css';


function Header(){
  return (
    <div>
      <nav id="nav" role="navigation">
        <ul>
          <li><Link to='/'>Menu</Link></li>
          <li><Link to='/Info'>Gameplay</Link></li>
          <li>{this.props.name}</li>
        </ul>
      </nav>
    </div>
  );
}

Header.propTypes = {
  NewGameForm: PropTypes.string
};

const mapStateToProps = state => {
  return {
    NewGameForm: state
  };
};

export default withRouter(connect(mapStateToProps)(Header));
