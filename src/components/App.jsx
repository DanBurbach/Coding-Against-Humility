import React, { Component } from 'react';
<<<<<<< HEAD
import { Switch, Route } from 'react-router-dom';
=======
import { Switch, Route, withRouter, HashRouter } from 'react-router-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider} from 'react-redux';
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase';
import thunk from 'redux-thunk';

import middlewareLogger from '../middleware/middleware-logger';
>>>>>>> feature/refactor-attempt-react-redux-firebase

import Main from './Main';
import NewGameForm from './Menu/NewGameForm';
import Info from './Menu/Info';
import Fineprint from './Menu/Fineprint';
import Header from './Header';
import Game from './Game';
import HeaderGameplay from './HeaderInfo/HeaderGameplay';
import Error404 from './Error404';
<<<<<<< HEAD

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
=======

import firebase from '../Firebase';
// import gameReducers from '../Reducers';

import '../assets/styles/Header.css';

const rrfConfig = {
  userProfile: 'users'
};

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  // startNewGame: gameReducers.startNewGame
});

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument(firebase)), 
    middlewareLogger));

const liftedProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
};

>>>>>>> feature/refactor-attempt-react-redux-firebase

class App extends Component {
  render() {
    
    return (
<<<<<<< HEAD
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
=======
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...liftedProps}>
          <HashRouter>
            <Switch>
              <Route exact path='/' render={()=><Main />} />
              <Route path='/newgameform' render={()=><NewGameForm />} />
              <Route path='/info' render={()=><Info />} />
              <Route path='/fineprint' render={()=><Fineprint />} />
              <Route path='/game' render={()=><Game />} />
              <Route path='/header' render={()=><Header />} />
              <Route path='/headergameplay' render={()=><HeaderGameplay />} />
              <Route component={Error404} />
            </Switch>
          </HashRouter>
        </ReactReduxFirebaseProvider>
      </Provider>
>>>>>>> feature/refactor-attempt-react-redux-firebase
    );
  }
}

export default App;
