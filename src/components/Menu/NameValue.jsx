import React from 'react';
import NewGameForm from './NewGameForm';
import constants from '../../constants';
const { c } = constants;
import { addNewGame } from '../../actions/';
import { connect } from 'react-redux';


function NameValue (dispatch) {
  return (
    <div>
    </div>
  )
};



export default connect()(NameValue);
