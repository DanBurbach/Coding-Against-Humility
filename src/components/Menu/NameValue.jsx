import React from 'react';
import { connect } from 'react-redux';

class NameValue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

 currentUserName(){
   firebase.database().ref('gameInfo/').once('value', function
   (snapshot) {
     console.log('looking for a username');
   });
  };
 

  render() {
    return (
      <div>
        {this.currentUserName}
      </div>
    )
  };
}

export default connect()(NameValue);
