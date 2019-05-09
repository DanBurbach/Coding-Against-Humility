import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Main';
import NewGameForm from './Menu/NewGameForm';
import Info from './Menu/Info';
import Fineprint from './Menu/Fineprint';
import Header from './Header';
import Game from './Game';
import HeaderGameplay from './HeaderInfo/HeaderGameplay';
import Error404 from './Error404';

import '../assets/styles/Header.css';


class App extends Component {
  render() {
    return (
      <div className ='App'>
        <Switch>
          <Route exact path='/' render={() => <Main />} />
          <Route path='/newgameform' render={() => <NewGameForm />} />
          <Route path='/info' render={() => <Info />} />
          <Route path='/fineprint' render={() => <Fineprint />} />
          <Route path='/game' render={() => <Game />} />
          <Route path='/header' render={() => <Header />} />
          <Route
            path='/headergameplay'
            render={() => <HeaderGameplay />}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
