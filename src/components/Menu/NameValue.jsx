import React, {Component} from 'react';
import { connect } from 'react-redux';

class NameValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.userName
    };
  }

  render() {
    const {userName} = this.state
    return (
      <div>
        {userName}
      </div>
    )
  };
}

export default connect()(NameValue);
