import React, { Component } from 'react';
import { Switch, Route, withRouter, HashRouter } from 'react-router-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider} from 'react-redux';
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase';
import thunk from 'redux-thunk';

import middlewareLogger from '../middleware/middleware-logger';

import Main from './Main';
import NewGameForm from './Menu/NewGameForm';
import Info from './Menu/Info';
import Fineprint from './Menu/Fineprint';
import Header from './Header';
import Game from './Game';
import HeaderGameplay from './HeaderInfo/HeaderGameplay';
import Error404 from './Error404';

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


class App extends Component {
  render() {
    
    return (
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
    );
  }
}

export default App;
