// core imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

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
          <Route exact path='/' component={Main} />
          <Route path='/newgameform' component={NewGameForm} />
          <Route path='/info' component={Info} />
          <Route path='/fineprint' component={Fineprint} />
          <Route path='/board' component={Board} />
          <Route path='/game' component={Game} />
          <Route path='/header' component={Header} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}



export default connect()(App);
