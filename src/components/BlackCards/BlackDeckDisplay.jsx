import React from 'react';
// import PropTypes from 'prop-types';
import '../../assets/styles/BlackDeckDisplay.css';


function BlackDeckDisplay(){

  return (
    <div className="row">
      <div className="col-4"></div>
      <div className="col-4">
        <div className="blackcard-card">
        <div className="blackcard-container">
          <div className="blackcard-front blackcard-side">
            <div className="blackcard-content">
              <h1>Coding Against Humility</h1>
            </div>
          </div>
          <div className="blackcard-back blackcard-side">
            <div className="blackcard-content">
              <h1>What is Batman's guilty pleasure?</h1>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="col-4"></div>
    </div>
  );
}



export default BlackDeckDisplay;
