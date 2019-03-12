import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import posed from 'react-pose';
import { keyframes } from 'popmotion';

const Box = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
});

const WhiteCards = ({currentWhiteCardArray}) => {
  return (
    <Box className="box" pose={(currentWhiteCardArray.length > 0) ? 'visible' : 'hidden'}>
      {currentWhiteCardArray.map(character => {
        return (
          <li key={whitecard.id} className="card">
            <h1>{whitecard.text}</h1>
          </li>
        );
      })}
    </Box>
  );
};

Characters.propTypes = {
  currentWhiteCardArray: PropTypes.arrayOf(Object),

  name: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    currentWhiteCardArray: state.currentWhiteCardArray,

  };
};

export default connect(mapStateToProps)(WhiteCards);
