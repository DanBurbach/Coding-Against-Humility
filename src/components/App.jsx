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


import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import {
  reactReduxFirebase,
  firebaseReducer,
  getFirebase
} from 'react-redux-firebase';
import thunk from 'redux-thunk';

import firebase from '../Firebase';
// import gameReducers from '../reducers';

const rrfConfig = {
  userProfile: 'gameInfo'
};

const rootReducer = combineReducers({
  firebase: firebaseReducer
  // startNewGameView: gameReducers.startNewGameView
});

const initialState = {};

const config = {
  userProfile: 'gameInfo' // firebase root where user profiles are stored
  // enableLogging: false // enable/disable Firebase's database logging
};

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig)
)(createStore);

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk.withExtraArgument(getFirebase)),
    reactReduxFirebase(firebase, config)
  )
);
export { store };

class App extends Component {
  render() {
    return (
      <div className='App'>
        <HashRouter>
          <Provider store={store}>
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
          </Provider>
        </HashRouter>
      </div>
    );
  }
}

export default App;
