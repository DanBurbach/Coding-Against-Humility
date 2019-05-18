import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const BlackCards = ({currentBlackCardArray, dispatch}) => {
  return (
    <div>
        {currentBlackCardArray.map(text)}
          <li key={blackcard.id} className="card">
            <h1>{blackcard.text}</h1>
          </li>
      <BlackDeckDisplay text={addBlackCard.text}
    </div>
  );

BlackCards.propTypes = {
  currentBlackCardArray: PropTypes.arrayOf(Object),
  selectedBlackCard: PropTypes.func,
  text: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    currentBlackCardArray: state.currentBlackCardArray,
    selectedBlackCard: state.selectedBlackCard
  }
};

export default connect(mapStateToProps)(BlackCards)};
