import React, { Component } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

import Main from './Main';
import SignInPage from "./LogIn";
import SignUpPage from './SignUp';
import PasswordForgetPage from "./PasswordForget";
import NewGameForm from './Menu/NewGameForm';
import Info from './Menu/Info';
import Fineprint from './Menu/Fineprint';
import Header from './Header';
import Game from './Game';
import HeaderGameplay from './HeaderInfo/HeaderGameplay';
import Error404 from './Error404';

import '../assets/styles/Header.css';

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider, firebaseReducer, getFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';


import * as ROUTES from './../constants/routes';
// import { withAuthentication } from './Session';
import firebase from '../Firebase';
// import gameReducers from '../reducers';

const rrfConfig = {
  userProfile: 'gameInfo'
};


const rootReducer = combineReducers({
  firebase: firebaseReducer,
  // startNewGameView: gameReducers.startNewGameView
});

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk.withExtraArgument(getFirebase)))
  );

  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
  };

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <HashRouter>
            <Switch>
              <Route exact path={ROUTES.HOME} component={Main} />
              <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
              <Route exact path={ROUTES.LOG_IN} component={SignInPage} />
              <Route
                exact
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForgetPage}
              />
              <Route
                exact
                path={ROUTES.NEW_GAME_FORM}
                component={NewGameForm}
              />
              <Route exact path={ROUTES.GAME_INFO} component={Info} />
              <Route
                exact
                path={ROUTES.GAME_FINEPRINT}
                component={Fineprint}
              />
              <Route exact path={ROUTES.MAIN_GAME} component={Game} />
              <Route
                exact
                path={ROUTES.MAIN_GAME_HEADER}
                component={Header}
              />
              <Route
                exact
                path={ROUTES.MAIN_GAME_GAMEPLAY}
                component={HeaderGameplay}
              />
              <Route component={Error404} />
            </Switch>
          </HashRouter>
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}

export default App;
