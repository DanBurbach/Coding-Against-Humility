import React from 'react';
import constants from '../../constants';
const { c } = constants;
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class NameValue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      modules: null
    };
    this.userNameInformation = this.userNameInformation.bind(this);
  }


  userNameInformation() {

  };
     
  render () {
    return (
      <div>
        {this.state.name && userNameInformation()}
      </div>
      )
    };
  
}

NameValue.propTypes = {
  name: PropTypes.string
}

export default connect()(NameValue);
