import React from 'react';
import constants from '../../constants';
const { c } = constants;
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function NameValue (props) {

  function userName(gameInfo) {
    const { dispatch } = props;
    const action = {
      type: c.USER_NAME,
      gameInfo: gameInfo
    };
    dispatch(action);
  }

  const userNameInformation =
  <div onLoad={() => {
    userName(props.gameInfo);
  }}>
    {props.name}
  </div>

  return (
    <div>
      {userNameInformation}
    </div>
  )
};

NameValue.propTypes = {
  name: PropTypes.string
}

export default connect()(NameValue);
