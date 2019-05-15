import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import '../assets/styles/Error404.css';

function Error404() {
  return (
    <div className='wrapper fade-in'>
      <div id='notfound'>
        <div className='notfound'>
          <div className='notfound-404'>
            <h1>404</h1>
            <h2>Page not found</h2>
          </div>
          <Link to={ROUTES.HOME}>Main Menu</Link>
        </div>
      </div>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
