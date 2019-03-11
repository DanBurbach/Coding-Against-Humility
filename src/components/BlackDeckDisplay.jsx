import React from 'react';
// import PropTypes from 'prop-types';
import '../assets/styles/BlackDeckDisplay.css';


function BlackDeckDisplay(){

  return (
    <div className="card">
      <div className="blackcard-container">
        <div className="blackcard-front blackcard-side">
          <div className="blackcard-content">
            <h1>Coding Against Humility</h1>
          </div>
        </div>
        <div className="blackcard-back blackcard-side">
          <div className="blackcard-content">
          </div>
        </div>
      </div>
    </div>
  );
}



export default BlackDeckDisplay;
