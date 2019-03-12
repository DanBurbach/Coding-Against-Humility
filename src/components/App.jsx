// core imports
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// core navigation and return information
import Error404 from './Error404';

// main page
import Main from './Main';
import NewGameForm from './Menu/NewGameForm';
import Info from './Menu/Info';
import Fineprint from './Menu/Fineprint';

// outlying component pages
import Header from './Header';
import Game from './Game';
import Board from './Board';

import '../assets/styles/Header.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={()=><Main />} />
          <Route path='/newgameform' render={()=><NewGameForm />} />
          <Route path='/info' render={()=><Info />} />
          <Route path='/fineprint' render={()=><Fineprint />} />
          <Route path='/board' render={()=><Board />} />
          <Route path='/game' render={()=><Game />} />
          <Route path='/header' render={()=><Header userName={this.props.name}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  userName: PropTypes.object
};

const mapStateToProps = state => {
  return {
    name: state
  };
};

export default withRouter(connect(mapStateToProps)(App));
