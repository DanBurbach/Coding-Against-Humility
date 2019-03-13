import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';



const WhiteCards = ({currentWhiteCardArray, dispatch}) => {
  return (
    <div>
        {currentWhiteCardArray.map(text)}
          <li key={whitecard.id} className="card">
            <h1>{whitecard.text}</h1>
          </li>;
      })}
    </div>
  );
};

Characters.propTypes = {
  currentWhiteCardArray: PropTypes.arrayOf(Object),
  selectedWhiteCard: PropTypes.func,
  text: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    currentWhiteCardArray: state.currentWhiteCardArray,
    selectedWhiteCard: state.selectedWhiteCard
  };
};

export default connect(mapStateToProps)(WhiteCards);
