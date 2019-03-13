import React from 'react';
import NewGameForm from './NewGameForm';
import constants from '../../constants/ActionTypes';
const { types } = constants;


function NameValue(store, nameValue){
  const Name = ({name}) => {name};
  return (
    <div>
      {name}
    </div>
  );
}

export default NameValue;
