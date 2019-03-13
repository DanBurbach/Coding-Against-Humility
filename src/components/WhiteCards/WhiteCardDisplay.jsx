import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/cardhand/cardhand.css';

function WhiteCardDisplay(props){
  return (
    <div className="cards">
      <div className="card">
        <div className="card-face">
          <div className="card-label">{props.textbyID}</div>
        </div>
      </div>
      <div className="card">
        <div className="card-face">
          <div className="card-label"></div>
        </div>
      </div>
      <div className="card">
        <div className="card-face">
          <div className="card-label"></div>
        </div>
      </div>
      <div className="card">
        <div className="card-face">
          <div className="card-label"></div>
        </div>
      </div>
      <div className="card">
        <div className="card-face">
          <div className="card-label"></div>
        </div>
      </div>
      <div className="card">
        <div className="card-face">
          <div className="card-label"></div>
        </div>
      </div>
      <div className="card">
        <div className="card-face">
          <div className="card-label"></div>
        </div>
      </div>
      <div className="card">
        <div className="card-face">
          <div className="card-label"></div>
        </div>
      </div>
      <div className="card">
        <div className="card-face">
          <div className="card-label"></div>
        </div>
      </div>
      <div className="card">
        <div className="card-face">
          <div className="card-label"></div>
        </div>
      </div>
    </div>
  );
}

WhiteCardDisplay.propTypes = {
  text: PropTypes.string
};

export default WhiteCardDisplay;
